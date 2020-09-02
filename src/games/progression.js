import run from '../index.js';
import random from '../random.js';

const description = 'What is the result of the expression?';
const roundsCount = 3;
const min = 0;
const max = 50;

const generateRoundData = () => {
  const numOne = random(min, max);
  const numTwo = random(min, max);
  const tmp = [numOne];
  while (tmp.length < 10) tmp.push(tmp[tmp.length - 1] + numTwo);
  const element = random(min, tmp.length - 1);
  const answerCorrect = `${tmp[element]}`;
  tmp[element] = '..';
  const textQuestion = tmp.join(' ');
  return [textQuestion, answerCorrect];
};

const runProgressionGame = () => run(description, roundsCount, generateRoundData);

export default runProgressionGame;
