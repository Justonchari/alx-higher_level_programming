#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  let i = 0;
  while (list[i] !== undefined) {
    if (list[i] === searchElement) {
      count++;
    }
    i++;
  }
  return count;
};
