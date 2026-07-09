// Default parameters
// Default parameters are parameters that have a default value assigned to them in the function signature, i.e. default parameter gives a value if argument is not passed

// NOTE: In TypeScript, all required parameters must appear before any optional (`?`) or default parameters.
// NOTE: Optional parameters (?) and default parameters must come after every required parameter — but they don't need to follow each other in a fixed order.

// Use-case 1: Default parameter with a required parameter
function getBaseUrl(service: string, env: string = 'qa'): string {
  return `https://${env}.${service}.example.com`;
}

console.log(getBaseUrl('auth')); // https://qa.auth.example.com
console.log(getBaseUrl('auth', 'dev')); // https://dev.auth.example.com

// ---------------------------------------------------------------------------------

// Use-case 2: Default parameter with optional parameter
function getUserInfo(username: string, age: number = 18, email?: string): void {
  console.log('------------------------');
  console.log(`Username: ${username}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email ?? 'Not provided'}`);
}

getUserInfo('qa_user');
// Username: qa_user
// Age: 18
// Email: Not provided

getUserInfo('qa_user', 25);
// Username: qa_user
// Age: 25
// Email: Not provided

getUserInfo('qa_user', 25, 'qa_user@example.com');
// Username: qa_user
// Age: 25
// Email: qa_user@example.com
