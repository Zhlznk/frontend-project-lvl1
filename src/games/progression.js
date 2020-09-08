import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What is the result of the expression?';
const min = 0;
const max = 20;
const lengthProgression = 10;

const generateRoundData = () => {
  const num = generateNumber(min, max);
  const difference = generateNumber(min, max);
  const progression = [num];
  while (progression.length < lengthProgression) {
    progression.push(progression[progression.length - 1] + difference);
  }
  const element = generateNumber(0, progression.length - 1);
  const correctAnswer = `${progression[element]}`;
  progression[element] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => run(description, generateRoundData);

export default runProgressionGame;
