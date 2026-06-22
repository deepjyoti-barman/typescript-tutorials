// Loop control statements
// Loop control statements are used to control the flow of a loop
// They can be used to skip an iteration of a loop or to exit a loop entirely

// break statement
// break statement is used to exit a loop immediately
let links = ['Home', 'Products', 'Contacts', 'Logout'];

for (const link of links) {
  if (link === 'Contacts') {
    console.log('Contact link found');
    break;
  }
}
