import run from '../index.js';
import random from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 2;
const max = 50;

const greatestCommonDivisor = (numOne, numTwo) => {
  let divider = ((numOne < numTwo) ? numOne : numTwo);
  while ((numOne % divider) + (numTwo % divider) !== 0) divider -= 1;
  return divider;
};

const generateRoundData = () => {
  const numOne = random(min, max);
  const numTwo = random(min, max);
  const textQuestion = `${numOne} ${numTwo}`;
  const answerCorrect = `${greatestCommonDivisor(numOne, numTwo)}`;
  return [textQuestion, answerCorrect];
};

const runGcdGame = () => run(description, generateRoundData);

export default runGcdGame;
