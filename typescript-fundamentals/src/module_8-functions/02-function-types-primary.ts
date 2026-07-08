// functions can primary be of 4 types
// 1. function without parameters or return type
// 2. function with parameters but without return type
// 3. function without parameters but with return type
// 4. function with parameters and return type

// 1. function without parameters or return type
function greet(): void {
  console.log('Hello, World!');
}

greet(); // Hello, World!

// ---------------------------------------------------------------------------------

// 2. function with parameters but without return type
function greetUser(username: string): void {
  console.log(`Hello ${username}!`);
}

greetUser('Diana Smith'); // Hello Diana Smith!

// ---------------------------------------------------------------------------------

// 3. function without parameters but with return type
function getGreeting(): string {
  return 'Hello, TypeScript!';
}

let greeting: string = getGreeting();
console.log(greeting); // Hello, TypeScript!

// ---------------------------------------------------------------------------------

// 4. function with parameters and return type
// Example 1: Returning a number
function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20);
console.log(result); // 30

// Example 2: Returning a string
function getBaseUrl(env: string): string {
  if (env === 'qa') {
    return 'https://qa.example.com';
  }

  return 'https://example.com';
}

console.log(getBaseUrl('qa')); // https://qa.example.com

// Example 3: Returning a number
function isSuccessStatus(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 300;
}

console.log(isSuccessStatus(200)); // true
console.log(isSuccessStatus(404)); // false
