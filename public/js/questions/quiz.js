// TODO select filterLevel
let filterLevel = 10;
let shuffle = true;

// =============================

function getParam(name) {
  return (location.search.split(name + "=")[1] || "").split("&")[0];
}

function getRandomQuestions() {
  let questions = ALL_QUESTIONS.filter(
    q => q.level <= filterLevel && q.answers && q.answers.length
  );

  if (shuffle) {
    questions.shuffle();
  }
  questions = questions.slice(0, 10);
  questions.sort((a, b) => a.level - b.level);

  return questions;
}

function getQuestionsByIdx(indexes) {
  return indexes.map(i => ALL_QUESTIONS[i]);
}

function findIndexesByIds(ids) {
  return ALL_QUESTIONS.map((q, i) =>
    ids.some(id => id === q.id) ? i : -1
  ).filter(i => i >= 0);
}

function getRandomLetter() {
  //return "e";
  const s = "abcdefghijklmnopqrstuvwxyz";
  return s[Math.floor(Math.random() * s.length)];
}

function getPublicIds(ids, key) {
  const indexes = findIndexesByIds(ids);
  indexes.shuffle();
  const test = indexes.join("-").replace(/\-/gi, () => getRandomLetter());
  // TODO test encode with key
  return test;
}

function getQuestionIndexes() {
  const test = getParam("test");
  if (!test) return null;
  return test
    .split(/[a-z]+/)
    .map(n => parseInt(n))
    .sort((a, b) => a - b);
}

// =============================

let questions;
const indexes = getQuestionIndexes();
if (indexes) {
  shuffle = false;
  questions = getQuestionsByIdx(indexes);
} else {
  // questions = ALL_QUESTIONS;
  questions = getRandomQuestions();
  //questions = getExamQuestionsByIdx(indexes);

  // TODO add all answers (print all without answers)
  //questions = ALL_QUESTIONS.filter(q => !q.answers || !q.answers.length);
}

printQ(questions);

applyCustomTheme();

// TODO disable copy code
