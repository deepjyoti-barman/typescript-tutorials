// template literal type operator
// template literal type operator is used to create a new type based on a template literal string
// It allows you to create a new type by combining existing types with string literals
// This is TypeScript type-level feature, similar to JavaScript template strings but used for types
// Template literal types are useful for strict string patterns
// You may see them in frameworks, routes, event names, tags, and APIs

// Use-case 1: (Basic) Creating a new type based on string literals
type Greeting = `Hello ${string}`;

let message1: Greeting = 'Hello QA';
let message2: Greeting = 'Hello Playwright';

console.log('message1:', message1);
console.log('message2:', message2);

// let message3: Greeting = "Hi QA";
// Error: must start with Hello

// ---------------------------------------------------------------------------------

// Use-case 2: Creating a new type based on existing union types
type TestType = 'smoke' | 'regression' | 'sanity';

type TestTag = `@${TestType}`;

let tag1: TestTag = '@smoke';
let tag2: TestTag = '@regression';

console.log('tag1:', tag1);
console.log('tag2:', tag2);

// let tag3: TestTag = "smoke";
// Error: missing @

// ---------------------------------------------------------------------------------

// Use-case 3: Combining multiple template literals to create a more complex type
type TestType2 = 'smoke' | 'regression' | 'sanity';
type TestTag2 = `@${TestType2}-${number}`;

let tag4: TestTag2 = '@smoke-1';
let tag5: TestTag2 = '@regression-2';

console.log('tag4:', tag4);
console.log('tag5:', tag5);

// let tag6: TestTag2 = "@smoke";
// Error: missing @ and number

// ---------------------------------------------------------------------------------

// Use-case 4: (QA) Environment URL type
type Env = 'qa' | 'stage' | 'prod';
type AppUrl = `https://${Env}.example.com`;

let qaUrl: AppUrl = 'https://qa.example.com';
let stageUrl: AppUrl = 'https://stage.example.com';

console.log('qaUrl:', qaUrl);
console.log('stageUrl:', stageUrl);

// let wrongUrl: AppUrl = "https://dev.example.com";
// Error: dev is not allowed

// ---------------------------------------------------------------------------------

// Use-case 5: (QA) Combine with indexed access
type User = {
  username: string;
  password: string;
};

// The following expression evaluates to: type UserField = "username" | "password";
type UserField = keyof User;
type ValidationMessage = `${UserField} is required`;

let message: ValidationMessage = 'username is required';
console.log('message:', message);

// let wrongMessage: ValidationMessage = "email is required";
// Error: email is not allowed

// ---------------------------------------------------------------------------------

// Use-case 6: Dynamic event names
type PageName = 'Login' | 'Dashboard' | 'Profile';
type PageEvent = `${PageName}Page Loaded`;

let event1: PageEvent = 'LoginPage Loaded';
let event2: PageEvent = 'DashboardPage Loaded';

console.log('event1:', event1);
console.log('event2:', event2);

// let event3: PageEvent = "HomePage Loaded";
// Error: HomePage is not allowed
