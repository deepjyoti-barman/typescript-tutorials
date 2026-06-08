function add(productPrice: number, shippingCharges: number): number {
  return productPrice + shippingCharges;
}

console.log(add(10, 20));

// If productPrice accidentally comes as a string from an API
// TypeScript prevents the bug before the application runs by enforcing that both arguments must be numbers
console.log(add('10', 20)); // CTE: Argument of type 'string' is not assignable to parameter of type 'number'

// ---------------------------------------------------------------------------

// Example 2: Accessing a Non-Existent Property
const user: { name: string; age: number } = {
  name: 'John',
  age: 30,
};

// TypeScript warns you immediately while writing code
console.log(user.email.toLowerCase()); // CTE: Property 'email' does not exist on type '{ name: string; age: number; }'

// ---------------------------------------------------------------------------

// Example 3: Returning Wrong Data Type
// The bug is detected before it reaches production
function getAge(): number {
  return '25'; // Type 'string' is not assignable to type 'number'
}

// ---------------------------------------------------------------------------

// Example 4: Using an undefined variable
function getInfo() {
  // CTE: Cannot find 'firstName'
  if (firstName.length > 10) {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
}

getInfo();
