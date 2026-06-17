// String operator
// The string operator is the concatenation operator `+` which is used to combine two or more strings into one string
let firstName = 'QA';
let lastName = 'Engineer';

let fullName = firstName + ' ' + lastName;

console.log(fullName); // QA Engineer

// ---------------------------------------------------------------------------

// Better approach
let browser = 'chromium';

// Template literals are cleaner than string concatenation
console.log(`Running tests on ${browser}`);
