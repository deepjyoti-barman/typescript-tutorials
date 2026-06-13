// Unary operators
// Unary operators work on one value
// Unary operators are of three types: increment (++), decrement (--), and typeof

// Increment operator `++`
// It increases the value of a variable by 1
let retry = 0;

retry++;

console.log(retry); // 1

// ---------------------------------------------------------------------------

// Decrement operator `--`
// It decreases the value of a variable by 1
let remainingAttempts = 3;

remainingAttempts--;

console.log(remainingAttempts); // 2

// ---------------------------------------------------------------------------

// typeof operator
// It used to check the type of a value
let username = 'qa_user';

console.log(typeof username); // "string"
console.log(typeof 123); // "number"
console.log(typeof true); // "boolean"

if (typeof username === 'string') {
  console.log('Username is a string');
}
