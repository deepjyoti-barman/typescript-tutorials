// forEach loop
// forEach loop is a method that is used to iterate over an array
// It takes a callback function as an argument and executes the callback function for each element in the array
let testCases = ['Login test', 'Search test', 'Logout test'];

testCases.forEach((testCase) => {
  console.log(`Executing: ${testCase}`);
});

// NOTE: Be careful with async code inside forEach
// This is NOT recommended for Playwright async actions because it can lead to race conditions and unexpected behavior

// Example:
// const testUsers = ["admin", "standard_user"];
// testUsers.forEach(async (user) => {
//   await page.fill("#username", user);
// });

// Prefer for...of with await instead

// Example:
// const testUsers = ["admin", "standard_user"];
// for (const user of testUsers) {
//  await page.fill("#username", user);
// }
