// Assignment operators
// Assignment operators are used to assign values to variables
// = assigns value
let count = 10;
count = 20;

console.log(count); // 20

// ---------------------------------------------------------------------------

// Compound assignment operators
// +=, -=, *=, /=, %=
let score = 10;

score += 5; // same as score = score + 5
console.log(score); // 15

score -= 3; // same as score = score - 3
console.log(score); // 12

score *= 2; // same as score = score * 2
console.log(score); // 24

score /= 4; // same as score = score / 4
console.log(score); // 6

score %= 4; // same as score = score % 4
console.log(score); // 2

// ---------------------------------------------------------------------------

// QA example
let retryCount = 0;
retryCount += 1;

console.log(retryCount); // 1
