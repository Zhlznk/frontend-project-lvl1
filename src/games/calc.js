import run from '../index.js';
import random from '../random.js';

const description = 'What is the result of the expression?';
const roundsCount = 3;
const min = 0;
const max = 20;

const toNumber = (numOne, character, numTwo) => {
  let result;
  if (character === '+') result = `${numOne + numTwo}`;
  if (character === '-') result = `${numOne - numTwo}`;
  if (character === '*') result = `${numOne * numTwo}`;
  return result;
};

const generateRoundData = () => {
  const tmp = ['+', '-', '*'];
  const item = random(min, tmp.length - 1);
  const numOne = random(min, max);
  const numTwo = random(min, max);
  const textQuestion = `${numOne} ${tmp[item]} ${numTwo}`;
  const answerCorrect = toNumber(numOne, tmp[item], numTwo);
  return [textQuestion, answerCorrect];
};

const runCalcGame = () => run(description, roundsCount, generateRoundData);

export default runCalcGame;
