#!/usr/bin/node
const argv = process.argv;
function factorial (n) {
  if (isNaN(n)) {
    return 1;
  } else if (n <= 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(parseInt(argv[2])));
