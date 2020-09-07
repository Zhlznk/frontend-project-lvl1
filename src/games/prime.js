import run from '../index.js';
import getRandomIntInclusive from '../utils.js';

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

const findPrimeNumber = (num) => ((isPrime(num)) ? num : findPrimeNumber(num + 1));

const generateRoundData = () => {
  const number1 = getRandomIntInclusive(min, max);
  const number2 = (number1 % 2 > 0) ? findPrimeNumber(number1) : getRandomIntInclusive(min, max);
  const question = `${number2}`;
  const correctAnswer = (isPrime(number2)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => run(description, generateRoundData);

export default runPrimeGame;
