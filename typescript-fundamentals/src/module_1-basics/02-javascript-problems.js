// Example 1: Wrong Function Argument Type
function add(productPrice, shippingCharges) {
  return productPrice + shippingCharges;
}

console.log(add(10, 20)); // 30

// If productPrice accidentally comes as a string from an API
// Bug: Instead of performing numeric addition, JavaScript converts the number to productPrice string and concatenates
// This bug may go unnoticed until users report incorrect calculations
console.log(add('10', 20)); // 1020

// ---------------------------------------------------------------------------

// Example 2: Accessing a Non-Existent Property
const user = {
  name: 'John',
  age: 30,
};

console.log(user.email.toLowerCase()); // RTE: TypeError: Cannot read properties of undefined (reading 'toLowerCase')

// ---------------------------------------------------------------------------

// Example 3: Returning Wrong Data Type
function getAge() {
  return '25';
}

const age = getAge();
console.log(age + 10); // 2510: String concatenation happens instead of numeric addition

// ---------------------------------------------------------------------------

// Example 4: Using an undefined variable
function getInfo() {
  if (firstName.length > 10) {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
}

getInfo(); // RTE: ReferenceError: firstName is not defined
