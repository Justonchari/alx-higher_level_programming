#!/usr/bin/node
exports.esrever = function (list) {
  const len = list.length;
  const newList = [];
  let i = len - 1;
  while (i >= 0) {
    newList.push(list[i]);
    i--;
  }
  return newList;
};
