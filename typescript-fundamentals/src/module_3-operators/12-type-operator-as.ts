// as operator
// as operator tells TypeScript to treat a value as a specific type
// It only affects compile-time checking and does not change the actual value
const apiResponse: unknown = 'PASS';

const testResult = apiResponse as string;

console.log(testResult.toUpperCase());
