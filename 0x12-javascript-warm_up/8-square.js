#!/usr/bin/node

const process = require('process');
const firstArg = process.argv[2];
const size = parseInt(firstArg);

if (size === 'number') {
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < size; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }
} else {
  console.log('Missing size');
}
