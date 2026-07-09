// Rest parameters
// Rest parameters allow a function to accept an indefinite number of arguments as an array
// This is useful when you want to create functions that can handle multiple inputs without knowing the exact number of arguments in advance
// One can define a function with rest parameters using the `...` syntax followed by the parameter name
// The rest parameter must be the last parameter in the function's parameter list
// Only one rest parameter is allowed per function

// Use-case 1: Function signature with only rest parameters
// ...testNames collects all arguments into an array
function printTestNames(...testNames: string[]): void {
  for (const testName of testNames) {
    console.log(testName);
  }
}

printTestNames('Login test', 'Search test', 'Logout test');
// Login test
// Search test
// Logout test

printTestNames(); // Also valid — testNames becomes an empty array []

// ---------------------------------------------------------------------------------

// Use-case 2: Function signature with required parameters and rest parameters
// Rest parameters can be combined with required parameters
// but they must still come LAST in the parameter list
function runTestSuite(suiteName: string, ...testNames: string[]): void {
  console.log(`Suite: ${suiteName}`);
  console.log(`Total tests: ${testNames.length}`);
  testNames.forEach((test) => console.log(`- ${test}`));
}

runTestSuite('Regression', 'Login test', 'Search test');
// Suite: Regression
// Total tests: 2
// - Login test
// - Search test

// ---------------------------------------------------------------------------------

// Use-case 3: Invalid rest parameter placement
// Invalid — rest parameter must be last
// function invalid(...testNames: string[], suiteName: string): void {}
// Error: A rest parameter must be last in a parameter list.

// ---------------------------------------------------------------------------------

// Use-case 4: Application of built-in array methods on rest parameters
// Since results is a real array, array methods work directly on it
function countPassed(...results: boolean[]): number {
  return results.filter((result) => result === true).length;
}

console.log(countPassed(true, false, true, true)); // 3
