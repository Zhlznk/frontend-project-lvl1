import readlineSync from 'readline-sync';

const dialogue = (str) => readlineSync.question(str);

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = dialogue('May I have your name? ');
  console.log(`Hello ${name}!`);
};

export { greeting, dialogue };
