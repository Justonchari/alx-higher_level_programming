#!/usr/bin/node
/*
 * a script that prints the number of movies
 * where the character Wedge Antilles is present.
 */
const request = require('request');
const args = process.argv;
const url = `https://swapi-api.alx-tools.com/api/films/${args[2]}`;

async function fetchData () {
  const body = await new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });

  const newObj = JSON.parse(body);

  for (const i of newObj.characters) {
    const characterBody = await new Promise((resolve, reject) => {
      request(i, (err, resp, bd) => {
        if (err) {
          reject(err);
        } else {
          resolve(bd);
        }
      });
    });
    console.log(JSON.parse(characterBody).name);
  }
}

fetchData();
