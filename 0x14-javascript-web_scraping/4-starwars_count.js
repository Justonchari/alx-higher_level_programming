#!/usr/bin/node
/*
 * a script that prints the number of movies
 * where the character Wedge Antilles is present.
 */
const request = require('request');
const args = process.argv;
const id = 18;
const url = args[2];
let count = 0;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const newObj = JSON.parse(body);
    for (const i of newObj.results) {
      for (const j of i.characters) {
        if (j.includes(id)) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
