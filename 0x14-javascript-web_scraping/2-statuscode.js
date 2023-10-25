#!/usr/bin/node
/*
 * a script that display the status code of a GET request.
 */
const request = require('request');
const args = process.argv;
const url = args[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
