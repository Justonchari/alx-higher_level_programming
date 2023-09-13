#!/usr/bin/node
const square = require('./5-square');

class Square extends square {
  constructor (size) {
    super(size);
    this.size = size;
  }

  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    let str = '';
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        str += c;
      }
      if (i !== this.height - 1) {
        str += '\n';
      }
    }
    console.log(str);
  }
}
module.exports = Square;
