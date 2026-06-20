// while loop
// while loop is used to execute a block of code as long as a specified condition is true
// or in other words when we want to continue executing a block of code until a condition becomes false

// NOTE: Always update the condition variable, otherwise, you may create an infinite loop
let retry = 1;
let isSuccess = false;

while (retry <= 3 && !isSuccess) {
  console.log(`Trying login attempt ${retry}`);

  // Imagine login becomes successful on second attempt
  if (retry === 2) {
    isSuccess = true;
    console.log('Login successful');
  }

  retry++;
}
