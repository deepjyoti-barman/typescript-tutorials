// nullish coalescing operator (??)
// nullish coalescing operator is a new feature in TypeScript that allows you to provide a default value for a variable if it is null or undefined
const baseUrlFromConfig: string | undefined = undefined;

const baseUrl = baseUrlFromConfig ?? 'https://qa.example.com';
console.log(baseUrl);

// ----------------------------------------------------------------------------

// Important difference between `??` and `||`:

// || treats 0 as false
// nullish coalescing operator ?? only checks null or undefined
let retryCount = 0;

console.log(retryCount || 3); // 3
console.log(retryCount ?? 3); // 0
