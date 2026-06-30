// union operator (|)
// the union operator creates a union type, meaning a value can be one of several types
// for example, a variable can be either a string or a number or a boolean

// Use-case 1: String Or Number
let statusCode: string | number;

statusCode = 200;
statusCode = 'OK';

// ---------------------------------------------------------------------------------

// Use-case 2: Limited string values
type BrowserName = 'chromium' | 'firefox' | 'webkit';

let browser: BrowserName = 'chromium';

// browser = "chrome";
// Error: chrome is not allowed

// ---------------------------------------------------------------------------------

// Use-case 3: Function parameter
// Example 1
function printId(id: string | number): void {
  console.log(`ID is ${id}`);
}

printId(101);
printId('TC_101');

// Example 2
type TestStatus = 'passed' | 'failed' | 'skipped';

function printStatus(status: TestStatus): void {
  console.log(status);
}
printStatus('passed');
// printStatus('terminated'); // Error: terminated is not allowed

// ---------------------------------------------------------------------------------

// Use-case 4: Narrowing Union Types
function formatValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}

console.log(formatValue('qa')); // QA
console.log(formatValue(10)); // 10.00
