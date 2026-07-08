// Optional parameters
// Optional parameters are parameters that may or may not be provided when calling a function
// They are denoted by a question mark (?) after the parameter name in the function signature
// NOTE: If an optional parameter is not provided, it will be undefined within the function body
// NOTE: Optional parameters must come after all required parameters in the function signature

function login(username: string, password?: string): void {
  console.log(`Username: ${username}`);

  // (password === undefined)
  if (password) {
    console.log('Password is provided');
  } else {
    console.log('Password is missing');
  }
  console.log('------------------------');
}

login('qa_user');
login('qa_user', 'Password123');
