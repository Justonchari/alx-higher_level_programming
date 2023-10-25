#!/usr/bin/node
/*
 * a script that prints the title of a Star Wars movie
 * where the episode number matches a given integer.
 */
const request = require('request');
const args = process.argv;
const url = `https://swapi-api.alx-tools.com/api/films/${args[2]}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const newObj = JSON.parse(body);
    console.log(newObj.title);
  }
});
