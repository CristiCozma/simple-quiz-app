import { bin2hex, hex2bin } from "./libs/external-utilities";

declare var ace: any;

const API_URL = {
  ANSWERS: "data/answers.json"
};

const defaultCodeType = "js";

export function getParam(name: string) {
  return (location.search.split(name + "=")[1] || "").split("&")[0];
}

export const externalImport = (sources: string | string[]) => {
  sources = [].concat(sources);

  return Promise.all(
    sources.map(src => {
      return new Promise(resolve => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        script.async = false; // keep order of scripts
        script.onload = () => {
          resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
      });
    })
  );
};

export function getRandomLetter() {
  const s = "abcdefghijklmnopqrstuvwxyz";
  return s[Math.floor(Math.random() * s.length)];
}

export function getRandomQuestions(
  generator: QuizGenerator,
  allQuestions: any[],
  level: number,
  withAnswers: boolean = true
) {
  let questions = allQuestions.filter(q => q.level <= level && (withAnswers ? q.answers && q.answers.length : true));

  if (generator.shuffle) {
    //@ts-ignore
    questions.shuffle();
  }
  questions = questions.slice(0, generator.displayLimit);
  questions.sort((a, b) => a.level - b.level);

  return questions;
}

export function hideEl(selector: string) {
  //@ts-ignore
  document.querySelector(selector).style.display = "none";
}

export function applyCustomTheme() {
  const typeMatch = {
    js: "ace/mode/javascript",
    html: "ace/mode/html"
  };

  const codeEls = Array.from(document.querySelectorAll("article .code"));
  codeEls.forEach(el => {
    const type = el.getAttribute("data-type");
    const editor = ace.edit(el);
    const beautify = ace.require("ace/ext/beautify");
    const session = editor.getSession();
    editor.setReadOnly(true);

    //console.warn("editor", editor);
    editor.getSession().selection.on("changeSelection", () => {
      //console.warn("changeSelection");
      editor.getSession().selection.clearSelection();
    });

    editor.setTheme("ace/theme/monokai");
    // @ts-ignore
    session.setMode(typeMatch[type]);
    beautify.beautify(session);

    editor.setOptions({
      maxLines: Infinity
    });
  });
}

function findIndexesByIds(ids: string[]) {
  return window.ALL_QUESTIONS.map((q, i) => (ids.some(id => id === q.id) ? i : -1)).filter(i => i >= 0);
}

export function getPublicTestLink(ids: string[]) {
  const d = new Date();
  const key = d.getMonth() + d.getDate();
  const minutes = Math.floor(new Date().getTime() / 60000);
  const indexes = findIndexesByIds(ids);
  //@ts-ignore
  indexes.shuffle();

  const test = indexes.map(i => i + key).join("-");

  //console.warn("key", key, minutes);
  //console.warn("test", indexes, test, bin2hex(test));

  return bin2hex(test + "." + minutes);
}

export function getQuestionIndexes(test?: string) {
  test = test || getParam("test");
  if (!test) return null;

  const d = new Date();
  const key = d.getMonth() + d.getDate();
  const minutes = Math.floor(new Date().getTime() / 60000);

  const strings = (hex2bin(test) || `.${minutes}`).split(".");
  const questions = strings[0].split("-");
  const testMinutes = parseInt(strings[1]);

  //console.warn("questions", questions);
  if (minutes - testMinutes > 3) {
    console.error("Link Expired", minutes - testMinutes);
    alert("Link Expired");
    return [1, 2];
  }
  return questions.map((n: string) => parseInt(n) - key).sort((a: number, b: number) => a - b);
}

export const levelSelector = (options: any[], level: number, onChange?: (e: any) => void) => {
  const element = document.createElement("div");

  element.classList.add("level-selector");
  if (options && options.length) {
    element.innerHTML = `
      <label>
        Nivel
        <select name="levelSelector">
          ${options
            .map(e => `<option value="${e.value}" ${e.value === level ? 'selected="selected"' : ""}>${e.text}</option>`)
            .join("")}
        </select>
      </label>
    `;

    element.querySelector("select").addEventListener("change", onChange);
  }
  return element;
};

export const Quiz = (function () {
  let _generator: any;
  const entityToChar = {
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&quot;": '"',
    "&#39;": "'"
  };
  const charToEntity: { [key: string]: string } = {};
  const charToEntityRegex = (function () {
    const charKeys = [];
    for (let key in entityToChar) {
      //@ts-ignore
      const echar = entityToChar[key];
      charToEntity[echar] = key;
      charKeys.push(echar);
    }
    return new RegExp("(" + charKeys.join("|") + ")", "g");
  })();

  const htmlEncodeReplaceFn = function (match: any, capture: string) {
    return charToEntity[capture];
  };

  return {
    reset: (questions: any[]) => {
      const articles = Array.from(document.querySelectorAll("#questions article"));
      articles.forEach(article => {
        article.parentNode.removeChild(article);
      });
      Quiz.render(questions, _generator);
      //setFormReadOnly(false);
      document.querySelector("#result .q-point").innerHTML = "&nbsp;";
      document.querySelector("#test-result .q-point").innerHTML = "&nbsp;";
      //@ts-ignore
      document.querySelector("#submit-test").style.display = "";
    },
    render: (questions: any[], generator: QuizGenerator) => {
      printQ(generator, questions);
      _generator = generator;
      if (_generator) {
        _generator.afterRender();
      }
      Quiz.correctAnswers(questions);
    },
    isText: (answerType: AnswerType) => answerType === "text" || answerType === "number",
    correctAnswers: (questions: any[]) => {
      window.questions = questions;
      questions = questions.filter(q => q.answers);
      window.correctAnswers = questions.reduce((acc, question) => {
        let correct;
        if (Quiz.isText(question.answerType)) {
          correct = question.answers[0].correct;
        } else {
          const correctAns = question.answers.find((a: any) => a.correct === true);
          if (correctAns) {
            correct = correctAns.id;
          }
        }
        if (typeof correct !== "undefined") {
          acc[question.id] = [correct];
        }
        return acc;
      }, {});
    },
    htmlEncode: (value: string) => {
      return !value ? value : String(value).replace(charToEntityRegex, htmlEncodeReplaceFn);
    },

    sanitizeAnswer: (answer: any) => {
      const type = answer.type;
      let text = Quiz.htmlEncode(answer.text);
      switch (type) {
        case "mixed":
          text = answer.text;
          break;
        case "js":
          text = `<code>${text}</code>`;
          break;
        case "html":
          text = `<code>${text}</code>`;
          break;
        case "css":
          text = `<code>${text}</code>`;
          break;
        case "code":
          text = `<code>${text}</code>`;
          break;
      }
      return text;
    },

    checkPoints: (answers: any[], correctAnswers: any[]) => {
      //console.log(answers, "vs", correctAnswers);
      if (!correctAnswers) {
        console.warn("no correctAnswers for ", answers, answers[0].id);
        console.warn(
          "question",
          document.querySelector(`input[name="${answers[0].id}"]`).parentNode.parentNode.parentNode
        );
        correctAnswers = [];
      }

      return answers.map(answer => {
        let required, point;
        if (Quiz.isText(answer.type)) {
          required = true;
          point = answer.value == correctAnswers[0] ? 1 : 0;
        } else {
          required = correctAnswers.indexOf(answer.value) >= 0;
          point = answer.checked && required ? 1 : answer.checked ? -1 : 0;
        }
        return { ...answer, point, required };
      });
    },

    markResults: (asnswers: any[]) => {
      //console.warn("checks", asnswers);
      asnswers.forEach(answer => {
        let input;
        const isText = Quiz.isText(answer.type);
        if (isText) {
          input = document.querySelector(`input[name="${answer.id}"]`);
        } else {
          input = document.querySelector(`input[name="${answer.id}"][value="${answer.value}"]`);
        }

        const label = input.parentNode;

        // reset current rezults
        //@ts-ignore
        label.classList.remove("correct-answer");
        //@ts-ignore
        label.classList.remove("required-answer");
        //@ts-ignore
        label.classList.remove("incorrect-answer");

        if (answer.required && answer.checked) {
          if (!isText || answer.point) {
            //@ts-ignore
            label.classList.add("correct-answer");
          } else {
            //@ts-ignore
            label.classList.add("incorrect-answer");
          }
        } else if (answer.required && !answer.checked) {
          //@ts-ignore
          label.classList.add("required-answer");
        } else if (!answer.required && answer.checked) {
          //@ts-ignore
          label.classList.add("incorrect-answer");
        }
      });
    }
  };
})();

//@ts-ignore
Array.prototype.shuffle = function () {
  var i = this.length,
    j,
    temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

// TODO https://github.com/ajaxorg/ace/issues/3403
const sanitizeHTMLCode = (code: string) => {
  // TODO html encode to show &lt;
  code = code.replace(/</g, "&lt;");
  return code;
};
/**
 * TODO when use map(function(){}) - we get }\n)
 * @param code
 * @returns {*}
 */
const sanitizeCode = (code: string) => {
  // TODO html encode to show &lt;
  code = code.replace(/</g, "&lt;");
  // TODO find why in simple function is not working
  // eg. q: `function name(){if("yes" == 'yes'){console.log(x);}}name();`
  //code = code.replace(/\}/g, "}\n"); // make sure after } is at least one enter

  //tmp sol:
  code = code.replace(/\}\}/g, "} } ");

  code = code.replace(/\n\s*\n/g, "\n"); // remove multi enters
  return code;
};

/**
 * @param {String} fnString
 */
const getCodeFromFunction = (fnString: string) => {
  let code = fnString.trim();

  // remove "() => {" or "function q1() {" from begining of functions
  // only first (this is why we don't have "/g" in regex
  code = code.replace(/\s*\(\s*\)\s*=>\s*{/, "");
  code = code.replace(/function\s+q\d+\(\)\s*\{/, "");

  // replace last "}" from function
  code = code.substring(0, code.length - 1);

  //code = code.replace(/\s+/g, ' ');
  return sanitizeCode(code);
};

/**
 * @param {QuizGenerator} generator
 * @param {JSON/Array} options
 * [{
 *     id: 1,
 *     text: 'question?',
 *     q: string/function
 * }]
 * @param {String} qNumber
 */
function printQ(generator: QuizGenerator, options: any | any[], qNumber?: any) {
  if (Array.isArray(options)) {
    options.forEach(function (option, index) {
      printQ(generator, option, index + 1);
    });
    return;
  }
  if (typeof options === "undefined") {
    console.warn("no function");
    return;
  }

  let code = options.q;
  const type = options.type || defaultCodeType;

  if (type === "html") {
    code = sanitizeHTMLCode(code);
  } else if (typeof code === "function") {
    code = getCodeFromFunction(code.toString());
  } else if (code) {
    code = sanitizeCode(code);
  }

  const answerType = options.answerType || "checkbox";
  const answers = options.answers ? createAnswersSelector(options.id, options.answers, answerType, generator) : "";
  const question = getQuestionTpl(options.text, code, answers, qNumber, options.id, type, options);

  const container = document.querySelector("#questions");
  container.appendChild(question);
}

const getQuestionTpl = (
  title: string,
  code: string,
  answers: string,
  qNumber: string,
  id: string,
  type: string,
  options: any
) => {
  const answerSection = answers
    ? `<ol type="A" class="${options.answerDisplay || ""}">
         ${answers}
       </ol>`
    : "";

  qNumber = qNumber ? qNumber + ") " : "";

  const codeBlock = code ? `<pre class="code" data-type="${type}">${code}</pre>` : "";

  const element = document.createElement("article");
  element.id = `q-${id}`;
  element.innerHTML = `<h2><span class="q-point"></span><span class="q-nr">${qNumber}</span>${title}</h2>
    ${codeBlock}
    ${answerSection}`;
  return element;
};

/**
 *
 * @param {String} id
 * @param {Array} answers
 * @param {AnswerType} answerType
 */
const createAnswersSelector = (id: string, answers: any[], answerType: AnswerType, generator: QuizGenerator) => {
  if (generator.shuffle) {
    //@ts-ignore
    answers.shuffle();
  }
  return (
    "<li>" +
    (answers || [])
      .map(
        answer =>
          `<label><input class="answer" type="${answerType}" name="${id}" value="${
            Quiz.isText(answerType) ? "" : answer.id
          }">${Quiz.sanitizeAnswer(answer)}</label>`
      )
      .join("</li><li>") +
    "</li>"
  );
};

const collectAnswers = () => {
  const inputs = Array.from(document.querySelectorAll("input.answer"));
  const answers = inputs.map((input: any) => {
    const type = input.type;
    const isText = Quiz.isText(type);
    return {
      id: input.name,
      value: isText ? input.value : input.value * 1, // convert to number
      checked: isText ? input.value !== "" : input.checked,
      type: type
    };
  });

  const groupAnswers = answers.reduce((acc: any, answer) => {
    acc[answer.id] = acc[answer.id] || [];
    acc[answer.id].push(answer);
    return acc;
  }, {});

  return groupAnswers;
};

const calculatePoints = (answers: any[], correctAnswers: any[]) => {
  const inputs = Quiz.checkPoints(answers, correctAnswers);

  Quiz.markResults(inputs);

  const total = inputs.reduce((sum: number, answer: any) => sum + answer.point, 0);

  let average = correctAnswers.length;
  if (average === 0) {
    average = 1;
  }
  return (total > 0 ? total : 0) / average;
};

const showAnswers = (answers: any[], correctAnswers: any) => {
  const total = Object.keys(answers).length;
  let points = 0;

  for (let id in answers) {
    if (answers.hasOwnProperty(id)) {
      const p = calculatePoints(answers[id], correctAnswers[id]);
      const qPoint = Math.round(p * 100) / 100;
      document.querySelector(`#q-${id} .q-point`).innerHTML = `${qPoint}`;
      if (qPoint === 1) {
        document.querySelector(`#q-${id}`).classList.add("correct");
      }
      //console.warn("print points", id, p);
      points += p;
    }
  }

  //@ts-ignore
  points = points.toFixed(2);
  document.querySelector("#result .q-point").innerHTML = `${points}/${total}`;
  document.querySelector("#test-result .q-point").innerHTML = `${points}/${total}`;

  //@ts-ignore
  document.querySelector("#submit-test").disabled = true;

  setFormReadOnly(true);

  const test = getParam("test");
  if (test) {
    window.print();
  }
};

const setFormReadOnly = (readOnly: boolean) => {
  const inputs = Array.from(document.querySelectorAll("input.answer"));
  inputs.forEach((input: any) => {
    if (input.type === "radio" || input.type === "checkbox") {
      input.disabled = readOnly;
    } else {
      input.readOnly = readOnly;
    }
  });
};

export const submitTest = () => {
  //console.clear();

  const answers = collectAnswers();

  // TODO combine local answers with API
  if (JSON.stringify(window.correctAnswers) !== "{}") {
    showAnswers(answers, window.correctAnswers);
  } else {
    fetch(API_URL.ANSWERS)
      .then(response => {
        return response.json();
      })
      .then(correctAnswers => {
        showAnswers(answers, correctAnswers);
      });
  }
};

window.submitTest = submitTest;
