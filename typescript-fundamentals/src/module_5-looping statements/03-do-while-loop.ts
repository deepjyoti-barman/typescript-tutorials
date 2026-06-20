// do while loop
// do while loop is used when we want to execute a block of code at least once and then check the condition to see if we need to repeat the block of code again
// NOTE: do while always runs the code block at least one time, even if the condition is false
let retry = 5;

do {
  console.log('This will run once');
  retry++;
} while (retry <= 3);
