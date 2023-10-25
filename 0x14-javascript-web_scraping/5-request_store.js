#!/usr/bin/node
/*
 * a script that writes a string to a file.
 */
const fs = require('fs');
const request = require('request');
const args = process.argv;
const url = args[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(args[3], body, err => {
      if (err) {
        console.log(err);
      }
    });
  }
});
