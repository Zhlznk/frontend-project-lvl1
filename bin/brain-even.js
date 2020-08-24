#!/usr/bin/env node

import cli from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = cli('May I have your name? ');
console.log(`Hello ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isAnswerCorrect = (num, answer) => {
  if (answer === 'yes' && num % 2 === 0) return true;
  if (answer === 'no' && num % 2 === 1) return true;
  return false;
};

const play = () => {
  let counter = 0;

  while (counter < 3) {
    const num = Math.floor(Math.random() * 100);
    const correct = () => ((num % 2 === 0) ? '"yes"' : '"no"');

    console.log(`Question: ${num} `);
    const answer = (cli('Your answer: '));

    if (isAnswerCorrect(num, answer)) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was ${correct()}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  return `Congratulations, ${name}!`;
};

console.log(play());
