#!/usr/bin/node
/*
 * Write a script that reads and prints the content of a file
 */
const fs = require('fs');
const args = process.argv;
fs.readFile(args[2], 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
