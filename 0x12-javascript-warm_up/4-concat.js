#!/usr/bin/node

// Access the arguments passed to the script
const args = process.argv;

// // Set default values for arguments if they are not provided
const arg1 = args[2] || 'undefined';

const arg2 = args[3] || 'undefined';
// Print the formatted output
console.log(`${arg1} is ${arg2}`);
