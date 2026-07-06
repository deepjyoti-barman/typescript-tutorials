// functions can primary be of 4 types
// 1. function without parameters or return type
// 2. function with parameters but without return type
// 3. function without parameters but with return type
// 4. function with parameters and return type

// 1. function without parameters or return type
function greet(): void {
  console.log('Hello, World!');
}

greet(); // Output: Hello, World!

// ---------------------------------------------------------------------------------

// 2. function with parameters but without return type
function greetUser(username: string) {
  console.log(`Hello ${username}`);
}

greetUser('Diana Smith'); // Output: Hello John Doe');

// ---------------------------------------------------------------------------------

// 3. function without parameters but with return type
function getGreeting(): string {
  return 'Hello, TypeScript!';
}

let greeting: string = getGreeting();
console.log(greeting); // Output: Hello, TypeScript!

// ---------------------------------------------------------------------------------

// 4. function with parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20);
console.log(result); // 30
