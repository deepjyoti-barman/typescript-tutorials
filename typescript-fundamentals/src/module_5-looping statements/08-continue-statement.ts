// continue statement
// continue statement is used to skip an iteration of a loop and continue with the next iteration
let users = ['admin', 'locked_user', 'standard_user'];

for (const user of users) {
  if (user === 'locked_user') {
    console.log('Skipping locked user');
    continue;
  }

  console.log(`Testing login for ${user}`);
}
