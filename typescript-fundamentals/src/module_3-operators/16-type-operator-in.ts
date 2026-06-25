// in operator
// in iterates over a set of keys to generate a new type
// It is mainly used in mapped types to avoid writing repetitive code

// Simple example
type Smartphone = { brand: string; os: string };
type Laptop = { brand: string; screen: number };

function getSpecs(device: Smartphone | Laptop) {
  // Check if the unique property 'os' exists in the object
  if ('os' in device) {
    // TypeScript safely knows this is a Smartphone
    return `Phone OS: ${device.os}`;
  } else {
    // TypeScript safely knows this is a Laptop
    return `Laptop Screen: ${device.screen} inches`;
  }
}

console.log(getSpecs({ brand: 'Samsung', os: 'Android' }));

// ---------------------------------------------------------------------------

// Example in arrays
// If you use in on an array, it checks if the index number exists as a key in that array
const tools = ['git', 'docker', 'npm'];

console.log('git' in tools); // false (The string "git" is a value, not an index)
console.log(0 in tools); //  true (Index 0 exists)
console.log(2 in tools); //  true (Index 2 exists)
console.log(5 in tools); // false (Index 5 does not exist)
console.log('length' in tools); //  true (The "length" property exists on arrays)

// ---------------------------------------------------------------------------

// Example with objects
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2024,
};

// 2. Check for properties using the 'in' operator
const hasMake = 'make' in car;
const hasColor = 'color' in car;

console.log('hasMake:', hasMake); // true
console.log('hasColor:', hasColor); // false

// ---------------------------------------------------------------------------

// Example with strings
type TestSteps = 'login' | 'search' | 'logout';

type TestStatus = {
  [Step in TestSteps]: boolean;
};

const executionStatus: TestStatus = {
  login: true,
  search: true,
  logout: false,
};

console.log(executionStatus);
