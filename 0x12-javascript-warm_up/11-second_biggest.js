#!/usr/bin/node
const argv = process.argv;

if (argv.length <= 3) {
  console.log(0);
} else {
  let myVar;
  let max = parseInt(argv[2]);
  for (let i = 2; i < argv.length; i++) {
    myVar = parseInt(argv[i]);
    if (myVar > max) {
      max = myVar;
    }
  }

  let secMax;
  for (let j = 2; j < argv.length; j++) {
    myVar = parseInt(argv[j]);
    if (myVar < max) {
      secMax = myVar;
      break;
    }
  }
  if (secMax === undefined) {
    console.log(max);
  } else {
    for (let z = 2; z < argv.length; z++) {
      myVar = parseInt(argv[z]);
      if (myVar < max && myVar > secMax) {
        secMax = myVar;
      }
    }
    console.log(secMax);
  }
}
