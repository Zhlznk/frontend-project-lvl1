import readlineSync from 'readline-sync';

const run = (description, roundsCount, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  if (description.length === 0) return console.log(`Hello ${name}!`);
  console.log(`Hello ${name}!`);
  console.log(description);

  let counter = roundsCount;

  while (counter > 0) {
    counter -= 1;
    const [textQuestion, answerCorrect] = generateRoundData();
    console.log(`Question: ${textQuestion}`);
    const answer = (readlineSync.question('Your answer: '));
    if (answerCorrect === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default run;
