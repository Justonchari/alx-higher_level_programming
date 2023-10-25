#!/usr/bin/node
/*
 * a script that writes a string to a file.
 */
const fs = require('fs');
const args = process.argv;
const txt = args[3];
fs.writeFile(args[2], txt, err => {
  if (err) {
    console.log(err);
  }
});
