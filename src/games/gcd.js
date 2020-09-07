import run from '../index.js';
import getRandomIntInclusive from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 2;
const max = 50;

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y)); // Euclid's algorithm

const generateRoundData = () => {
  const number1 = getRandomIntInclusive(min, max);
  const number2 = getRandomIntInclusive(min, max);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;
  return [question, correctAnswer];
};

const runGcdGame = () => run(description, generateRoundData);

export default runGcdGame;
