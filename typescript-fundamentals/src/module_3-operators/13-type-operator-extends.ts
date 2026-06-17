// extends operator
// the extends keyword is used to copy properties from one structure to another so you do not have to rewrite them
// You can use it primarily two main ways: with Interfaces (to define shapes of objects) or with Classes (to share actual code and behavior)

// 3rd use case: extends also restricts a generic type so it must satisfy a required structure
// It’s commonly used to ensure that required properties exist

// Example - 1: with Interfaces (to define shapes of objects)
// Define a basic object structure
interface Animal {
  name: string;
}

// Extend it to create a specialized structure
interface Dog extends Animal {
  breed: string;
}

// This object MUST have both 'name' and 'breed'
const myPet: Dog = {
  name: 'Buddy',
  breed: 'Golden Retriever',
};

// ---------------------------------------------------------------------------

// Example - 2: with Classes (to share actual code and behavior)
// Create a parent class with a function
class Robot {
  greet() {
    console.log('Hello!');
  }
}

// Create a child class that extends the parent
class CleaningRobot extends Robot {
  clean() {
    console.log('Vacuuming the floor...');
  }
}

// The child class can use its own functions AND the parent's functions
const roomCleaner = new CleaningRobot();
roomCleaner.greet(); // Output: "Hello!" (inherited from Robot)
roomCleaner.clean(); // Output: "Vacuuming the floor..."

// ---------------------------------------------------------------------------

// Example - 3: Use of extends for Generic Constraints in TypeScript
// Creates a "Minimum Requirement": The syntax <T extends { testName: string }> tells TypeScript: "This function accepts any object layout T, but it must at least contain a property named testName that is a string"
// Allows Flexible Extra Properties: Because it uses generics (T), the function doesn't restrict the object to only testName. You can pass in objects with completely different extra shapes - like priority, id, or duration — without creating separate type definitions for every variation
// Guarantees Safe Execution: Inside the function, console.log(test.testName) is 100% safe to execute. The compiler guarantees that testName will always exist, preventing runtime crashes (Cannot read properties of undefined)
function printTestName<T extends { testName: string }>(test: T) {
  console.log(test.testName);
}

printTestName({
  testName: 'Verify Login',
  priority: 'High',
});

// Error: testName is missing
// printTestName({
//   priority: "High",
// });
