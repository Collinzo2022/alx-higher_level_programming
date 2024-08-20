#!/usr/bin/node

// Access the first argument passed to the script
const arg = process.argv[2];

// Convert the argument to an integer
const num = parseInt(arg);

// Check if the conversion results in a valid number
if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}
