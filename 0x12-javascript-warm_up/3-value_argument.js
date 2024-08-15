#!/usr/bin/node

// Access the arguments passed to the script
const args = process.argv;

// check if the first argument(after the script name) is provided
if (args[2]) {
  console.log(args[2]); // Print the first argument
} else { console.log('No argument'); }
