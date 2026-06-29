// spread operator
// spread operator expands an iterable like array or object into individual elements

// Use-case 1: Copy an array
let browsers = ['chromium', 'firefox'];

let copiedBrowsers = [...browsers];
copiedBrowsers.push('webkit');

console.log(browsers); // ["chromium", "firefox"]
console.log(copiedBrowsers); // ["chromium", "firefox", "webkit"]

// ---------------------------------------------------------------------------------

// Use-case 2: Merge arrays
let smokeTests = ['Login', 'Logout'];
let regressionTests = ['Search', 'Cart'];

let allTests = [...smokeTests, ...regressionTests];

console.log(allTests); // ["Login", "Logout", "Search", "Cart"]

// ---------------------------------------------------------------------------------

// Use-case 3: Copy an object
let defaultUser = {
  username: 'user@example.com',
  password: 'Password123',
};

let copiedUser = { ...defaultUser };

console.log(copiedUser); // {username: 'user@example.com', password: 'Password123'}

// ---------------------------------------------------------------------------------

// Use-case 4: Merge objects
let facultyInfo = { name: 'John Doe', age: 2 };
let sectionInfo = { department: 'Computer Science', year: 3 };

let combinedInfo = { ...facultyInfo, ...sectionInfo };

console.log(combinedInfo); // {name: 'John Doe', age: 2, department: 'Computer Science', year: 3}

// ---------------------------------------------------------------------------------

// Use-case 5: Create a new object with additional properties
let user = {
  username: 'user@example.com',
  password: 'Password123',
};

let updatedUser = {
  ...user,
  address: '123 Main St',
  phone: '555-1234',
};

console.log(updatedUser); // {username: 'user@example.com', password: 'Password123', address: '123 Main St', phone: '555-1234'}

// ---------------------------------------------------------------------------------

// Use-case 6: Override properties in an object
let baseUser = {
  username: 'user@example.com',
  password: 'Password123',
  role: 'viewer',
};

let adminUser = {
  ...baseUser,
  role: 'admin',
};

console.log(adminUser.role); // admin

// ---------------------------------------------------------------------------------

// Use-case 7: Function arguments
let numbers = [10, 20, 30];

console.log(Math.max(...numbers)); // 30
