// enum vs union type
// In TypeScript, many teams also use union types instead of enums

// union type version
type BrowserName = 'chromium' | 'firefox' | 'webkit';
let browser: BrowserName = 'chromium';
console.log(browser);

// browser = "chrome";
// Error: "chrome" is not allowed

// enum type version
enum TestStatus {
  Passed = 'passed',
  Failed = 'failed',
  Skipped = 'skipped',
}

let status: TestStatus = TestStatus.Passed;
console.log(status);

// Simple guidance
// Use enum when:
// - You want named constants
// - You want values grouped together
// - You want easy reuse across framework files

// Use union type when:
// - You only need simple string restrictions
// - You do not need a runtime object
