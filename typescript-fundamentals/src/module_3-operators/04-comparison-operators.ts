// Comparison operators
// Comparison operators are used to compare two values
// They return a boolean value: true or false
// They are of two types: equality and relational
// Equality: ==, ===, !=, !==
// Relational: >, <, >=, <=
let actualStatusCode = 200;
let expectedStatusCode = 200;

console.log(actualStatusCode === expectedStatusCode); // true
console.log(actualStatusCode !== expectedStatusCode); // false
console.log(actualStatusCode > 201); // false
console.log(actualStatusCode < 201); // true
console.log(actualStatusCode >= 200); // true
console.log(actualStatusCode <= 199); // false

// ---------------------------------------------------------------------------

// Use === instead of ==
// Use !== instead of !=

// === checks value and type
// == allows type conversion and can create confusing results
// console.log(5 == '5'); // true  - not recommended
// console.log(5 === '5'); // false - recommended

// ---------------------------------------------------------------------------

// QA example
let actualTitle = 'Dashboard';
let expectedTitle = 'dashboard';

if (actualTitle === expectedTitle) {
  console.log('Title is correct');
} else {
  console.log('Title is incorrect');
}
