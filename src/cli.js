import readlineSync from 'readline-sync';
console.log("Welcome to the Brain Games!");
const enterName = readlineSync.question('May I have your name? ');
export const greeting = 'Hello ' + enterName + '!';
console.log(greeting);