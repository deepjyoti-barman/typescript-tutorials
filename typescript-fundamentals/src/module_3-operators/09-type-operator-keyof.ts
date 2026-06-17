// Type operators
// TypeScript are special keywords that manipulate, derive, or transform types to create more flexible and reusable type definitions

// keyof operator
// keyof creates a union of all property names (keys) of a type
// It helps ensure that only valid property names are used, catching typos at compile time
interface TestData {
  username: string;
  password: string;
  environment: string;
}

type TestDataKey = keyof TestData; // "username" | "password" | "environment"

function getValue(key: TestDataKey) {
  console.log(`Fetching value for: ${key}`);
}

getValue('username'); // Valid
getValue('environment'); // Valid
// getValue("user"); // Error
