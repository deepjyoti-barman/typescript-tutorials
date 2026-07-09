// Advantages of Arrays
// 1. Store multiple values in one variable
// 2. Easy to loop through data
// 3. Useful for data-driven testing
// 4. Many built-in methods are available
// 5. Keeps related values together

// Disadvantages of Arrays
// 1. Large arrays can become hard to manage
// 2. Array index mistakes are common
// 3. Mixed arrays can reduce readability
// 4. Searching large arrays can be slower than using Map/Set
// 5. Mutable arrays can be accidentally changed

// String array
let browsers: string[] = ['chromium', 'firefox', 'webkit'];

console.log('browsers[0]:', browsers[0]);

// ---------------------------------------------------------------------------

// Number array
let statusCodes: number[] = [200, 201, 400, 404, 500];

console.log('statusCodes[2]:', statusCodes[2]);

// ---------------------------------------------------------------------------

// Boolean array
let testResults: boolean[] = [true, false, true];

console.log('testResults[1]:', testResults[1]);

// ---------------------------------------------------------------------------

// Array of objects
type User = {
  username: string;
  password: string;
};

let users: User[] = [
  { username: 'admin@example.com', password: 'Password123' },
  { username: 'user@example.com', password: 'Password123' },
];

console.log('users[0]:', users[0]);
console.log('users[0]?.username:', users[0]?.username);
console.log('users[0]?.password):', users[0]?.password);
