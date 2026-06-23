// Array of mixed types
// This array can hold both strings and numbers, allowing for flexibility in the types of values it can store
// However, it's important to be cautious when using mixed types, as it can lead to confusion and potential errors when processing the array elements
let values: (string | number)[] = ['Login', 200, 'Dashboard', 404];

console.log('values[0]:', values[0]);
console.log('values[2]:', values[3]);

// ---------------------------------------------------------------------------

// Array of any type
// This array can hold any type of value, providing maximum flexibility
// However, using the 'any' type can lead to a loss of type safety, making it harder to catch errors during development
let dynamicValues: any[] = ['Login', 200, true, { page: 'Dashboard' }, null];

console.log('dynamicValues[3]:', dynamicValues[3]);
console.log('dynamicValues[4]:', dynamicValues[4]);

// ---------------------------------------------------------------------------

// Tuple array
// A tuple array is an array that can hold elements of different types, but with a fixed structure and order
// This allows for more structured data representation, but it requires careful management of the types and order of elements
// This can also help prevent errors when accessing elements of the array or when accessing elements by index

let userInfo: [string, number, boolean][] = [
  ['Alice', 30, true],
  ['Bob', 25, false],
];

console.log('userInfo[0]:', userInfo[0]);

// Accessing element like the following will result: Object is possibly 'undefined'. error
// console.log('userInfo[0][1]:', userInfo[0][1]);

// Fix 1: Explicit bounds check (Safest)
// To fix this error, we need to check if the element exists before accessing it
if (userInfo[1] !== undefined) {
  console.log('userInfo[1][2]:', userInfo[1][2]);
} else {
  console.log('userInfo[1] is undefined');
}

// Fix 2: Optional chaining (less safe), returns undefined instead of throwing)
console.log('userInfo[1]?.[2]:', userInfo[1]?.[2]);

// Fix 3: Non-null assertion operator (unsafe but quickest)
// NOTE: Use only when you're certain the value exists
// Tells TypeScript that the value is not null or undefined, but can lead to runtime errors if the value is actually null or undefined
console.log('userInfo[1]![2]:', userInfo[1]![2]);

// ---------------------------------------------------------------------------

// Array with unknown length
// This array can hold elements of a specific type, but its length is not fixed
// This allows for dynamic growth and shrinkage of the array, but it requires careful handling to avoid index out-of-bounds errors
let scores: number[] = [];
scores.push(85);
scores.push(90);
scores.push(78);

console.log('scores[1]:', scores[1]);
console.log('scores[1001]:', scores[1001]);

// ---------------------------------------------------------------------------

// Readonly array
// A readonly array is an array that cannot be modified after its creation
// This provides immutability, which can help prevent accidental changes to the array's contents
// However, it also means that any attempt to modify the array will result in a compile-time error or runtime error
const readonlyUsernames: ReadonlyArray<string> = ['alice', 'john'];
const readonlyScores: readonly number[] = [85, 90, 78];

// readonlyUsernames.push('jane'); // CTE: Property 'push' does not exist on type 'readonly string[]'
console.log('readonlyUsernames[1]:', readonlyUsernames[1]);
console.log('readonlyUsernames[2]:', readonlyScores[2]);
