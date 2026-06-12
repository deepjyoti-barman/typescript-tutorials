// never type:
// The never type also represents the absence of a value
// But unlike void which can be assigned to undefined, never cannot be assigned to any value, including undefined
// never is used to indicate that a function will never return or throw an errors and can be used as a return type for functions
// Recommended: Use never for functions that will never return or throw an errors

// let nothing: never = undefined; // CTE

// Example usage - 1:
function throwError(message: string): never {
  // return; // CTE
  throw new Error(message);
}

// This will throw an error and never return
throwError('This is an error');

// Example usage - 2:
function runInfiniteLoop(): never {
  while (true) {
    console.log('Welcome to TypeScript');
  }
}

// This function will run an infinite loop and never return
runInfiniteLoop();
