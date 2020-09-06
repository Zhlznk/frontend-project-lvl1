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
  const question = `${numOne} ${numTwo}`;
  const correctAnswer = `${greatestCommonDivisor(numOne, numTwo)}`;
  return [question, correctAnswer];
};

const runGcdGame = () => run(description, generateRoundData);

export default runGcdGame;
