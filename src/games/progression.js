import index from '../index.js';
import random from '../random.js';

const guide = 'What is the result of the expression?';
const min = 0;
const max = 50;

const content = () => {
  const numOne = random(min, max);
  const numTwo = random(min, max);
  const tmp = [numOne];
  while (tmp.length < 10) tmp.push(tmp[tmp.length - 1] + numTwo);
  const element = random(min, tmp.length - 1);
  const answerCorrect = `${tmp[element]}`;
  tmp[element] = '..';
  const textQuestion = tmp.join(' ');
  return [textQuestion, answerCorrect];
};

const progression = () => index(guide, content);

export default progression;
