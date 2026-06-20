// else if ladder
// Used when we have multiple conditions to check and we want to execute different blocks of code based on those conditions
let statusCode = 404;

if (statusCode === 200) {
  console.log('Success');
} else if (statusCode === 400) {
  console.log('Bad request');
} else if (statusCode === 401) {
  console.log('Unauthorized');
} else if (statusCode === 404) {
  console.log('Not found');
} else {
  console.log('Unknown status code');
}
