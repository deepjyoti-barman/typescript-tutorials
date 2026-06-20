// for...of loop
// for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// It provides a simpler and more readable syntax compared to traditional for loops
let testUsers = ['admin', 'standard_user', 'locked_user'];

for (let user of testUsers) {
  console.log(`Running login test for user: ${user}`);
}
