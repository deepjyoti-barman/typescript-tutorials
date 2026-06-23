// Arrays
// Arrays in TypeScript is a collection of elements of the same type stored in a single variable
// The elements can be of any type, including primitive types (like number, string, boolean) or complex types (like objects or other arrays)

// Use of Arrays in QA domain
// - list of browsers
// - list of users
// - list of test cases
// - list of URLs
// - list of API response items
// - list of products in cart

// Declare of array using array literal syntax
let browsers: string[] = ['chromium', 'firefox', 'webkit'];

// Declare of array using new keyword and Array constructor
let statusCodes: Array<number> = [200, 201, 400, 404, 500];

// Accessing ar
// Array index starts from 0. i.e. first item is at index 0
console.log(browsers[0]); // chromium
console.log(browsers[1]); // firefox
console.log(browsers[2]); // webkit
console.log(browsers[3]); // undefined, as there are only 3 items in the array

// Accessing array elements via for...of loop
for (let browser of browsers) {
  console.log('Browser:', browser);
}

// Accessing array index and elements via for...of loop
for (let [index, browser] of browsers.entries()) {
  console.log(`Index: ${index}, Browser: ${browser}`);
}

// Accessing array index and elements via simple for loop
for (let index = 0; index < statusCodes.length; index++) {
  console.log(`Index: ${index}, Status Code: ${statusCodes[index]}`);
}
