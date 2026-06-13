// string enums:
// String enums are more readable and usually better for test automation
enum BrowserName {
  Chrome = 'chrome',
  Firefox = 'firefox',
  Safari = 'safari',
}

let browser: BrowserName = BrowserName.Chrome;

console.log(browser); // "chrome"

// -----------------------------------------------------------------------------------

// string enums are useful because they are easy to understand in logs, reports, screenshots, traces, etc.
enum Environment {
  Dev = 'dev',
  QA = 'qa',
  Stage = 'stage',
  Prod = 'prod',
}

const currentEnv: Environment = Environment.QA;

console.log(`Running tests on environment: ${currentEnv}`); // Running tests on environment: qa

// -----------------------------------------------------------------------------------

// For Playwright, string enums are very useful
enum BrowserType {
  Chromium = 'chromium',
  Firefox = 'firefox',
  Webkit = 'webkit',
}

// Example function for Playwright-like usage
function printBrowser(browser: BrowserType) {
  console.log(`Selected browser is: ${browser}`);
}

printBrowser(BrowserType.Chromium); // Correct
printBrowser(BrowserType.Firefox); // Correct

// printBrowser("chrome");
// Error: "chrome" is not assignable to BrowserType
