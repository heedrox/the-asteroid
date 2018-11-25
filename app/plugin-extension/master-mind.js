const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const initializeNumber = (data) => data.mastermindNumber ? data.mastermindNumber : randomNumber(100, 999);
const toString = nr => `${nr}`;
const countOk = (userAnswer, rightAnswer) => {
  if (typeof userAnswer === 'undefined') return 0;
  return (userAnswer[0] === rightAnswer[0] ? 1 : 0)
    + (userAnswer[1] === rightAnswer[1] ? 1 : 0)
    + (userAnswer[2] === rightAnswer[2] ? 1 : 0);
};
const isEqual = (u, r) => (i, j, k) => (u[i] === r[j]) || (u[i] === r[k]);
const isWrong = (u, r) => (i, j, k) => (u[i] !== r[i] && !isEqual(u, r)(i, j, k));
const countWrongPosition = (userAnswer, rightAnswer) => {
  if (typeof userAnswer === 'undefined') return 0;
  const digitEquals = isEqual(userAnswer, rightAnswer);
  return (digitEquals(0, 1, 2) ? 1 : 0) + (digitEquals(1, 0, 2) ? 1 : 0) + (digitEquals(2, 0, 1) ? 1 : 0);
};
const countWrong = (u, r) => {
  if (typeof u === 'undefined') return 0;
  const isWrongDigit = isWrong(u, r);
  return (isWrongDigit(0, 1, 2) ? 1 : 0) +
    (isWrongDigit(1, 0, 2) ? 1 : 0) +
    (isWrongDigit(2, 0, 1) ? 1 : 0);
};
exports.masterMind = (data, scure, userAnswer) => {
  data.mastermindNumber = initializeNumber(data);
  const numOk = countOk(toString(userAnswer), toString(data.mastermindNumber));
  const numWrongPos = countWrongPosition(toString(userAnswer), toString(data.mastermindNumber));
  const numWrong = countWrong(toString(userAnswer), toString(data.mastermindNumber));
  return scure.sentences.get('master-mind-result', { verde: numOk, naranja: numWrongPos, rojo: numWrong });
};