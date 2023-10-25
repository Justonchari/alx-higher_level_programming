#!/usr/bin/node
/*
 * a script that writes a string to a file.
 */
const request = require('request');
const args = process.argv;
const url = args[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const obj = {};
    for (const i of JSON.parse(body)) {
      if (i.completed) {
        if (obj[String(i.userId)] === undefined) {
          obj[String(i.userId)] = 1;
        } else {
          obj[String(i.userId)]++;
        }
      }
    }
    console.log(obj);
  }
});
