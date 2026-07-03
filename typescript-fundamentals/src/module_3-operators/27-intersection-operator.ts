// intersection type operator (&)
// it combines multiple types into one type

// Union | means OR
// Intersection & means AND

// Use-case 1: Combine two object types
type User = {
  username: string;
};

type Role = {
  role: string;
};

type UserWithRole = User & Role;

let admin: UserWithRole = {
  username: 'admin@example.com',
  role: 'admin',
};

console.log(admin);

// ---------------------------------------------------------------------------------

// Use-case 2: Combine two union types
type Status = 'active' | 'inactive';
type Priority = 'low' | 'high';
type detailedPriority = 'low' | 'medium' | 'high' | 'urgent';

// This will result in never type since there is no overlap between Status and Priority
type TaskStatus = Status & Priority;

// This will result in detailedPriority type since there is overlap between Priority and detailedPriority
type PriorityWithDetails = Priority & detailedPriority;

// let taskStatus: TaskStatus = 'active'; // This will cause a TypeScript error since TaskStatus is never
let priorityWithDetails: PriorityWithDetails = 'low';
console.log(priorityWithDetails);

// ---------------------------------------------------------------------------------

// Use-case 3: (QA) Add common test metadata
type TestData = {
  testName: string;
};

type LoginData = {
  username: string;
  password: string;
};

type LoginTestData = TestData & LoginData;

let data: LoginTestData = {
  testName: 'Login test',
  username: 'admin@example.com',
  password: 'Password123',
};

console.log(data);

// ---------------------------------------------------------------------------------

// Use-case 4: (QA) Combine config types
type BrowserConfig = {
  browser: 'chromium' | 'firefox';
};

type EnvironmentConfig = {
  env: 'qa' | 'prod';
};

type TestConfig = BrowserConfig & EnvironmentConfig;

let config: TestConfig = {
  browser: 'chromium',
  env: 'qa',
};

console.log(config);
