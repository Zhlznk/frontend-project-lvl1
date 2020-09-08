import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'What is the result of the expression?';
const min = 0;
const max = 20;

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRoundData = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = generateNumber(min, operators.length - 1);
  const number1 = generateNumber(min, max);
  const number2 = generateNumber(min, max);
  const question = `${number1} ${operators[operatorIndex]} ${number2}`;
  const correctAnswer = `${calculate(number1, operators[operatorIndex], number2)}`;
  return [question, correctAnswer];
};

const runCalcGame = () => run(description, generateRoundData);

export default runCalcGame;
