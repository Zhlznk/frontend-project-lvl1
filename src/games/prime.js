import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 100;

const isPrime = (num) => {
  if (num < 1) return false;
  if (num <= 3) return true;
  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) return false;
  }
  return true;
};

const generateRoundData = () => {
  const num = generateNumber(min, max);
  const question = `${num}`;
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => run(description, generateRoundData);

export default runPrimeGame;
