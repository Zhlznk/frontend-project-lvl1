import run from '../index.js';
import getRandomIntInclusive from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;

const isEven = (num) => num % 2 === 0;

const generateRoundData = () => {
  const question = getRandomIntInclusive(min, max);
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => run(description, generateRoundData);

export default runEvenGame;
