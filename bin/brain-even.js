#!/usr/bin/env node

import { greeting, dialogue } from '../src/cli.js';

const name = greeting();
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
    const answer = (dialogue('Your answer: '));

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
