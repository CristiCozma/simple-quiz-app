const API_URL = {
  ANSWERS: "data/answers.json",
  MOCKS: "data/employees.json"
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
    });
    return;
  }
  if (typeof options === "undefined") {
    console.warn("no function");
    return;
  }

  let code = options.q;

  if (typeof code === "function") {
    code = getCodeFromFunction(code.toString());
  } else {
    code = sanitizeCode(code);
  }

  const answers = options.answers
    ? createAnswersSelector(options.id, options.answers)
    : "";
  const question = getQuestionTpl(options.text, code, answers, qNumber);

  $("#questions").append(question);
}

const getQuestionTpl = (title, code, answers, qNumber) => {
  const answerSection = answers
    ? `<ol type="A">
         ${answers}
       </ol>`
    : "";

  qNumber = qNumber ? qNumber + ". " : "";

  return `<article>
    <h2>${qNumber}${title}</h2>
    <div class="code">
        ${code}
    </div>
    ${answerSection}
    </article>`;
};

/**
 *
 * @param {String} id
 * @param {Array} answers
 */
const createAnswersSelector = (id, answers) =>
  "<li>" +
  (answers || [])
    .map(
      answer =>
        `<label><input type="checkbox" name="${id}" value="${answer.id}">${
          answer.text
        }</label>`
    )
    .join("</li><li>") +
  "</li>";

const collectAnswers = () => {
  // document.forms[0].elements['q1']; // TODO ?? other sol to group?

  const inputs = Array.from(document.querySelectorAll("input[type=checkbox]"));
  const answers = inputs.map(input => ({
    name: input.name,
    value: input.value,
    checked: input.checked
  }));

  return answers;
};

const submitTest = () => {
  console.clear();

  const answers = collectAnswers();
  console.warn("answers", answers);

  $.ajax(API_URL.ANSWERS).done(correctAnswers => {
    console.warn("correct answers:", correctAnswers);

    let points = 0;
  });
};

const applyCustomTheme = () => {
  $("article .code").each(function(i, el) {
    const editor = ace.edit(el);
    const beautify = ace.require("ace/ext/beautify");
    const session = editor.getSession();
    editor.setReadOnly(true);
    editor.setTheme("ace/theme/monokai");
    session.setMode("ace/mode/javascript");
    beautify.beautify(session);

    editor.setOptions({
      maxLines: Infinity
    });
  });
};