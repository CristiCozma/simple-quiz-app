const API_URL = {
  ANSWERS: "data/answers.json",
  MOCKS: "data/employees.json"
};

const defaultCodeType = "js";

function getParam(name) {
  return (location.search.split(name + "=")[1] || "").split("&")[0];
}

function getRandomLetter() {
  //return "e";
  const s = "abcdefghijklmnopqrstuvwxyz";
  return s[Math.floor(Math.random() * s.length)];
}

function getRandomQuestions(allQuestions) {
  let questions = allQuestions.filter(
    q => q.level <= filterLevel && q.answers && q.answers.length
  );

  if (shuffle) {
    questions.shuffle();
  }
  questions = questions.slice(0, 10);
  questions.sort((a, b) => a.level - b.level);

  return questions;
}

function getQuestionIndexes() {
  const test = getParam("test");
  if (!test) return null;

  const d = new Date();
  const key = d.getMonth() + d.getDate() + d.getHours();

  return test
    .split(/[a-z]+/)
    .map(n => parseInt(n) - key)
    .sort((a, b) => a - b);
}

const Quiz = (function() {
  const entityToChar = {
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&quot;": '"',
    "&#39;": "'"
  };
  const charToEntity = {};
  const charToEntityRegex = (function() {
    const charKeys = [];
    for (key in entityToChar) {
      echar = entityToChar[key];
      charToEntity[echar] = key;
      charKeys.push(echar);
    }
    return new RegExp("(" + charKeys.join("|") + ")", "g");
  })();

  const htmlEncodeReplaceFn = function(match, capture) {
    return charToEntity[capture];
  };

  return {
    reset: questions => {
      const articles = Array.from(
        document.querySelectorAll("#questions article")
      );
      articles.forEach(article => {
        article.parentNode.removeChild(article);
      });
      Quiz.render(questions);
      //setFormReadOnly(false);
      document.querySelector("#result .q-point").innerHTML = "&nbsp;";
      document.querySelector("#test-result .q-point").innerHTML = "&nbsp;";
      document.querySelector("#submit-test").style.display = "";
    },
    render: questions => {
      printQ(questions);
      applyCustomTheme();
      Quiz.correctAnswers(questions);
    },
    isText: answerType => answerType === "text" || answerType === "number",
    correctAnswers: questions => {
      window.correctAnswers = questions.reduce((acc, question) => {
        let correct;
        if (Quiz.isText(question.answerType)) {
          correct = question.answers[0].correct;
        } else {
          const correctAns = question.answers.find(a => a.correct);
          if (correctAns) {
            correct = correctAns.id;
          }
        }
        if (correct) {
          acc[question.id] = [correct];
        }
        return acc;
      }, {});
    },
    htmlEncode: value => {
      return !value
        ? value
        : String(value).replace(charToEntityRegex, htmlEncodeReplaceFn);
    },

    sanitizeAnswer: answer => {
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

    checkPoints: (answers, correctAnswers) => {
      //console.log(answers, "vs", correctAnswers);
      if (!correctAnswers) {
        console.warn("no correctAnswers for ", answers, answers[0].id);
        console.warn(
          "question",
          document.querySelector(`input[name="${answers[0].id}"]`).parentNode
            .parentNode.parentNode
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

    markResults: asnswers => {
      //console.warn("checks", asnswers);
      asnswers.forEach(answer => {
        let input;
        const isText = Quiz.isText(answer.type);
        if (isText) {
          input = document.querySelector(`input[name="${answer.id}"]`);
        } else {
          input = document.querySelector(
            `input[name="${answer.id}"][value="${answer.value}"]`
          );
        }

        const label = input.parentNode;

        // reset current rezults
        label.classList.remove("correct-answer");
        label.classList.remove("required-answer");
        label.classList.remove("incorrect-answer");

        if (answer.required && answer.checked) {
          if (!isText || answer.point) {
            label.classList.add("correct-answer");
          } else {
            label.classList.add("incorrect-answer");
          }
        } else if (answer.required && !answer.checked) {
          label.classList.add("required-answer");
        } else if (!answer.required && answer.checked) {
          label.classList.add("incorrect-answer");
        }
      });
    }
  };
})();

Array.prototype.shuffle = function() {
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
const sanitizeHTMLCode = code => {
  // TODO html encode to show &lt;
  code = code.replace(/</g, "&lt;");
  return code;
};
/**
 * TODO when use map(function(){}) - we get }\n)
 * @param code
 * @returns {*}
 */
const sanitizeCode = code => {
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
const getCodeFromFunction = fnString => {
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
 * @param {JSON/Array} options
 * [{
 *     id: 1,
 *     text: 'question?',
 *     q: string/function
 * }]
 * @param {String} qNumber
 */
function printQ(options, qNumber) {
  if (Array.isArray(options)) {
    options.forEach(function(option, index) {
      printQ(option, index + 1);
      // dev only to print ids
      // printQ(option, `${index + 1}. [${option.id}]`);
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
  const answers = options.answers
    ? createAnswersSelector(options.id, options.answers, answerType)
    : "";
  const question = getQuestionTpl(
    options.text,
    code,
    answers,
    qNumber,
    options.id,
    type,
    options
  );

  $("#questions").append(question);
}

const getQuestionTpl = (title, code, answers, qNumber, id, type, options) => {
  const answerSection = answers
    ? `<ol type="A" class="${options.answerDisplay || ""}">
         ${answers}
       </ol>`
    : "";

  qNumber = qNumber ? qNumber + ") " : "";

  const codeBlock = code
    ? `<pre class="code" data-type="${type}">${code}</pre>`
    : "";

  return `<article id="q-${id}">
    <h2><span class="q-point"></span><span class="q-nr">${qNumber}</span>${title}</h2>
    ${codeBlock}
    ${answerSection}
    </article>`;
};

/**
 *
 * @param {String} id
 * @param {Array} answers
 */
const createAnswersSelector = (id, answers, answerType) => {
  if (shuffle) {
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
  const answers = inputs.map(input => {
    const type = input.type;
    const isText = Quiz.isText(type);
    return {
      id: input.name,
      value: isText ? input.value : input.value * 1, // convert to number
      checked: isText ? input.value !== "" : input.checked,
      type: type
    };
  });

  const groupAnswers = answers.reduce((acc, answer) => {
    acc[answer.id] = acc[answer.id] || [];
    acc[answer.id].push(answer);
    return acc;
  }, {});

  return groupAnswers;
};

const calculatePoints = (answers, correctAnswers) => {
  const inputs = Quiz.checkPoints(answers, correctAnswers);

  Quiz.markResults(inputs);

  const total = inputs.reduce((sum, answer) => sum + answer.point, 0);

  let average = correctAnswers.length;
  if (average === 0) {
    average = 1;
  }
  return (total > 0 ? total : 0) / average;
};

const showAnswers = (answers, correctAnswers) => {
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

  points = points.toFixed(2);
  document.querySelector("#result .q-point").innerHTML = `${points}/${total}`;
  document.querySelector(
    "#test-result .q-point"
  ).innerHTML = `${points}/${total}`;

  document.querySelector("#submit-test").style.display = "none";

  setFormReadOnly(true);

  const test = getParam("test");
  if (test) {
    window.print();
  }
};

const setFormReadOnly = readOnly => {
  const inputs = Array.from(document.querySelectorAll("input.answer"));
  inputs.forEach(input => {
    if (input.type === "radio" || input.type === "checkbox") {
      input.disabled = readOnly;
    } else {
      input.readOnly = readOnly;
    }
  });
};

const submitTest = () => {
  console.clear();

  const answers = collectAnswers();

  // TODO combine local answers with API
  if (JSON.stringify(window.correctAnswers) !== "{}") {
    showAnswers(answers, window.correctAnswers);
  } else {
    $.ajax(API_URL.ANSWERS).done(correctAnswers => {
      showAnswers(answers, correctAnswers);
    });
  }
};

const applyCustomTheme = () => {
  const typeMatch = {
    js: "ace/mode/javascript",
    html: "ace/mode/html"
  };

  $("article .code").each(function(i, el) {
    const type = el.getAttribute("data-type");
    const editor = ace.edit(el);
    const beautify = ace.require("ace/ext/beautify");
    const session = editor.getSession();
    editor.setReadOnly(true);

    //console.warn("editor", editor);
    editor.getSession().selection.on("changeSelection", function(e) {
      //console.warn("changeSelection");
      editor.getSession().selection.clearSelection();
    });

    editor.setTheme("ace/theme/monokai");
    session.setMode(typeMatch[type]);
    beautify.beautify(session);

    editor.setOptions({
      maxLines: Infinity
    });
  });
};
