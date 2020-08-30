import index from '../index.js';
import random from '../random.js';

const guide = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 100;

const isPrime = (num) => {
  if (num < 1) return 'no';
  if (num === 1 || num === 2 || num === 3) return 'yes';
  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) return 'no';
  }
  return 'yes';
};

const needPrime = (num) => ((isPrime(num) === 'yes') ? num : needPrime(num + 1));

const content = () => {
  let numOne = random(min, max);
  const numTwo = random(min, max);
  // Для того, чтобы чаще в textQuestion попадались простые числа.
  if (numTwo % 2 > 0) numOne = needPrime(numOne);
  const textQuestion = `${numOne}`;
  const answerCorrect = `${isPrime(numOne)}`;
  return [textQuestion, answerCorrect];
};

const prime = () => index(guide, content);

export default prime;
