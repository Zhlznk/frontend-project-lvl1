#!/usr/bin/env node

import cli from '../src/cli.js';

const name = cli();
console.log(`Hello ${name}!`);
