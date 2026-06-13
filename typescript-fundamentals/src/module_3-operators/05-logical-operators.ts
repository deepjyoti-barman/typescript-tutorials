// Logical operators
// Logical operators are used to combine multiple conditions
// They return a boolean value: true or false
// They are of three types: AND (&&), OR (||), and NOT (!)

// Logical AND operator `&&`
// All conditions must be true only then the entire expression will evaluate to true
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {
  console.log('User can access admin dashboard');
}

// ---------------------------------------------------------------------------

// Logical OR operator `||`
// At least one condition must be true then the entire expression will evaluate to true
let isRootUser = false;
let isEditor = true;

if (isRootUser || isEditor) {
  console.log('User can edit content');
}

// ---------------------------------------------------------------------------

// Logical NOT operator `!`
// It reverses boolean value
let isVisible = false;

console.log(!isVisible); // true

if (!isVisible) {
  console.log('Element is not visible');
}
