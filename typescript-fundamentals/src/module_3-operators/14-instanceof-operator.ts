// instanceof operator
// instanceof operator is used to check if an object was created from a specific class or not
// instanceof operator returns true if the object was created from the specified class, otherwise it returns false
// The instanceof operator can be used with classes
// But, it does not work with interface or type, because TypeScript types do not exist at runtime (Error if tried)
// It can also be used with built-in classes like Array, Date, and RegExp

// Use-case 1: Basic class check
class LoginPage {}
class DashboardPage {}

let pageObject = new LoginPage();

console.log(
  'pageObject instanceof LoginPage:',
  pageObject instanceof LoginPage,
); // true
console.log(
  'pageObject instanceof DashboardPage:',
  pageObject instanceof DashboardPage,
); // false

// ---------------------------------------------------------------------------------

// Use-case 2: Class inheritance check (multiple levels of inheritance)
class BasePage {}
class HomePage extends BasePage {}

let loginPage = new HomePage();

console.log('loginPage instanceof HomePage:', loginPage instanceof HomePage); // true
console.log('loginPage instanceof BasePage:', loginPage instanceof BasePage); // true

// ---------------------------------------------------------------------------------

// Use-case 3: Error Handling
try {
  throw new Error('Login failed');
} catch (error) {
  if (error instanceof Error) {
    console.log('error.message:', error.message);
  }
}

// ---------------------------------------------------------------------------------

// Use-case 4: Array, Date, RegExp and other built in classes
let arr = [1, 2, 3];
console.log('arr instanceof Array:', arr instanceof Array); // true

let date = new Date();
console.log('date instanceof Date:', date instanceof Date); // true

let regex = /abc/;
console.log('regex instanceof RegExp:', regex instanceof RegExp); // true
