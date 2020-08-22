import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");

const greeting = `Hello  ${readlineSync.question('May I have your name? ')}!`;
console.log(greeting);

export default greeting;


