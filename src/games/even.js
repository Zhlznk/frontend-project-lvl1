import index from '../index.js';
import random from '../random.js';

const guide = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const content = () => {
  const textQuestion = random(min, max);
  const answerCorrect = isEven(textQuestion);
  return [textQuestion, answerCorrect];
};

const even = () => index(guide, content);

export default even;
