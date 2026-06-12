// any type:
// any allows you to assign any type of value to a variable, but it can lead to runtime errors if you're not careful
// Not recommended: Use any sparingly and only when necessary
// Example usage - 1:
let x: any;
x = 18;
x = 'hello';
x = true;

console.log(x.toUpperCase()); // No compile time error, but will throw a runtime error since x is currently a boolean and does not have the toUpperCase method

console.log(x()); // No compile time error, but will throw a runtime error since x is currently a boolean and is not a function

console.log(x.invalidMethod()); // No compile time error, but will throw a runtime error since x is currently a boolean and does not have the invalidMethod method

// Example usage - 2:
let fruits: any[] = ['Apple', 100, true];
fruits.push('Mango');
console.log(fruits);

// Example usage - 3:
function info(a: number, b: number): any {
  if (a > b) {
    return 'a is greater than b';
  } else {
    return false;
  }
}
console.log(info(5, 10));
