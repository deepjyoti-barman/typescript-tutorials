// switch statement
// switch is a control flow statement that is used when we want to compare one value against many possible values
// NOTE: break is important, without break, TypeScript/JavaScript continues to the next case
let browserName = 'chrome';

switch (browserName) {
  case 'chromium':
    console.log('Run test on Chromium');
    break;
  case 'firefox':
    console.log('Run test on Firefox');
    break;
  case 'webkit':
    console.log('Run test on WebKit');
    break;
  default:
    console.log('Unsupported browser');
}

// ---------------------------------------------------------------------------

// switch statement with enums
enum Environment {
  QA = 'qa',
  Stage = 'stage',
  Prod = 'prod',
}

function getBaseUrl(env: Environment): string {
  switch (env) {
    case Environment.QA:
      return 'https://qa.example.com';

    case Environment.Stage:
      return 'https://stage.example.com';

    case Environment.Prod:
      return 'https://example.com';

    default:
      throw new Error('Invalid environment');
  }
}

console.log(getBaseUrl(Environment.Prod));
