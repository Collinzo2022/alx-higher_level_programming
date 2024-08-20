#!/usr/bin/node

// define the recursive function to compute factorial
function factorial (n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// access the first argument and convert it to an integer
const num = parseInt(process.argv[2]);

// Calculate and print the factorial
console.log(factorial(isNaN(num) ? 1 : num));
