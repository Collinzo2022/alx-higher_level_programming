#!/usr/bin/node

// Access command-line arguments and convert them to integers
const args = process.argv.slice(2).map(arg => parseInt(arg));
// Remove duplicates and sort the numbers in descending order
const uniqueArgs = [...new Set(args)].sort((a, b) => b - a);
// // // Determine and print the second biggest integer or 0 if not applicable
console.log(uniqueArgs.length < 2 ? 0 : uniqueArgs[1]);
