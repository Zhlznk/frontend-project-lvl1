import run from '../index.js';
import random from '../random.js';

const description = 'What is the result of the expression?';
const min = 0;
const max = 50;

const generateRoundData = () => {
  const numOne = random(min, max);
  const numTwo = random(min, max);
  const tmp = [numOne];
  while (tmp.length < 10) tmp.push(tmp[tmp.length - 1] + numTwo);
  const element = random(min, tmp.length - 1);
  const correctAnswer = `${tmp[element]}`;
  tmp[element] = '..';
  const question = tmp.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => run(description, generateRoundData);

export default runProgressionGame;
