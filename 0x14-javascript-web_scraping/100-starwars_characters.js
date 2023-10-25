#!/usr/bin/node
/*
 * a script that prints the number of movies
 * where the character Wedge Antilles is present.
 */
const request = require('request');
const args = process.argv;
const url = `https://swapi-api.alx-tools.com/api/films/${args[2]}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const newObj = JSON.parse(body);
    for (const i of newObj.characters) {
      request(i, (err, resp, bd) => {
        if (err) {
          console.log(error);
        } else {
          console.log(JSON.parse(bd).name);
        }
      });
    }
  }
});
