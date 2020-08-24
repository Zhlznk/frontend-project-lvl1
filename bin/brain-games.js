#!/usr/bin/env node

import cli from '../src/cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = cli('May I have your name? ');
  console.log(`Hello ${name}!`);
};

greeting();
