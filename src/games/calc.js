import run from '../index.js';
import getRandomIntInclusive from '../utils.js';

const description = 'What is the result of the expression?';
const min = 0;
const max = 20;

const calculate = (number1, character, number2) => {
  switch (character) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const generateRoundData = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomIntInclusive(min, operators.length - 1);
  const number1 = getRandomIntInclusive(min, max);
  const number2 = getRandomIntInclusive(min, max);
  const question = `${number1} ${operators[operatorIndex]} ${number2}`;
  const correctAnswer = `${calculate(number1, operators[operatorIndex], number2)}`;
  return [question, correctAnswer];
};

const runCalcGame = () => run(description, generateRoundData);

export default runCalcGame;
