#!/usr/bin/node

// Access the first argument and convert it to an integer
const first = parseInt(process.argv[2]);

if (isNaN(first)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < first; i++) {
    console.log('C is fun');
  }
}
