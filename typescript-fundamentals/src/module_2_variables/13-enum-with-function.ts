// Enum with function example
enum TestResult {
  Passed = 'PASSED',
  Failed = 'FAILED',
  Skipped = 'SKIPPED',
}

function logTestResult(result: TestResult) {
  if (result === TestResult.Passed) {
    console.log('Test passed successfully');
  } else if (result === TestResult.Failed) {
    console.log('Test failed');
  } else if (result === TestResult.Skipped) {
    console.log('Test was skipped');
  }
}

logTestResult(TestResult.Passed);
logTestResult(TestResult.Failed);

// logTestResult("PASSED");
// Error:
// Even though "PASSED" is the same string value,
// TypeScript expects TestResult enum member
