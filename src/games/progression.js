import run from '../index.js';
import getRandomIntInclusive from '../utils.js';

const description = 'What is the result of the expression?';
const min = 0;
const max = 20;
const members = 10;

const generateRoundData = () => {
  const number1 = getRandomIntInclusive(min, max);
  const number2 = getRandomIntInclusive(min, max);
  const progression = [number1];
  while (progression.length < members) {
    progression.push(progression[progression.length - 1] + number2);
  }
  const element = getRandomIntInclusive(0, progression.length - 1);
  const correctAnswer = `${progression[element]}`;
  progression[element] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => run(description, generateRoundData);

export default runProgressionGame;
