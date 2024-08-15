#!/usr/bin/node
const args = process.argv.slice(2); // Slice to get argument excluding the script name and node

if (args.length === 0) {
  console.log('No argument');
} else if (args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
