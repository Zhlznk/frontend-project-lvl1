import run from '../index.js';
import random from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const generateRoundData = () => {
  const question = random(min, max);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

const runEvenGame = () => run(description, generateRoundData);

export default runEvenGame;
