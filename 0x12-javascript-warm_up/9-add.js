#!/usr/bin/node

// Define the add function
function add (a, b) {
  return a + b;
}

// Access the first and second arguments and convert them to integers
const firstInt = parseInt(process.argv[2]);
const secondInt = parseInt(process.argv[3]);

// Check if the arguments are valid numbers and print the result of the addition
if (isNaN(firstInt) || isNaN(secondInt)) {
  console.log('NaN');
} else {
  console.log(add(firstInt, secondInt));
}
