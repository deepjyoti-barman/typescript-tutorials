// typeof operator
// typeof extracts the type of an existing variable or object
// It avoids duplicating type definitions and keeps types synchronized with your data

// Simple example
let testName = 'LoginPageTest';
console.log(typeof testName); // "string"

// ---------------------------------------------------------------------------

// Advanced example
const loginTestData: { username: string; password: string; browser: string } = {
  username: 'admin',
  password: 'admin123',
  browser: 'Chrome',
};

type LoginData = typeof loginTestData;

const anotherTest: LoginData = {
  username: 'tester',
  password: 'pass123',
  browser: 'Firefox',
};

console.log(anotherTest);
