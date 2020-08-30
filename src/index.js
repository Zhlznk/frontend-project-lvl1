import readlineSync from 'readline-sync';
import content from './content.js';
import greeting from './cli.js';

const play = (guide, str) => {
  const correctAnswersInARow = 3;
  const name = greeting();
  console.log(guide);

  let counter = 0;

  while (counter < correctAnswersInARow) {
    const [textQuestion, answerCorrect] = content(str);
    console.log(`Question: ${textQuestion}`);
    const answer = (readlineSync.question('Your answer: '));
    if (answerCorrect === answer) {
      counter += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
      console.log(`Let's try again, ${name}!`);
      counter = 0;
    }
  }
  return `Congratulations, ${name}!`;
};

export default play;
