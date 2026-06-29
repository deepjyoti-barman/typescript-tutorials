// rest operator
// the rest operator is used to collect multiple values into an array or object

// Same syntax as spread, but usage is different.
// - Spread expands values.
// - Rest collects values.

// Use-case 1: Rest parameters in function with strings
function printTestNames(...testNames: string[]): void {
  for (const testName of testNames) {
    console.log(testName);
  }
}

printTestNames('Login test', 'Search test', 'Logout test');

// ---------------------------------------------------------------------------------

// Use-case 2: Rest parameters in function with numbers
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(addNumbers(10, 20, 30)); // 60

// ---------------------------------------------------------------------------------

// Use-case 3: Rest in array destructuring
let browsers = ['chromium', 'firefox', 'webkit'];

let [firstBrowser, ...otherBrowsers] = browsers;

console.log(firstBrowser); // chromium
console.log(otherBrowsers); // ["firefox", "webkit"]

// ---------------------------------------------------------------------------------

// Use-case 4: Rest in object destructuring
let user = {
  username: 'admin@example.com',
  password: 'Password123',
  role: 'admin',
};

let { password, ...safeUser } = user;

console.log(password); // Password123
console.log(safeUser); // { username: "admin@example.com", role: "admin" }

// ---------------------------------------------------------------------------------

// Use-case 5: Rest parameters in function with objects
function printUserInfo({
  department,
  ...studentInfo
}: {
  name: string;
  age: number;
  department: string;
}): void {
  console.log(`Username: ${studentInfo.name}`);
  console.log(`Age: ${studentInfo.age}`);
  console.log(`Department: ${department}`);
}

let studentRecord = {
  name: 'John Doe',
  age: 27,
  department: 'Computer Science',
};

printUserInfo(studentRecord);
