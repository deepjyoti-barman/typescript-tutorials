// non-null assertion operator
// The non-null assertion operator (!) is used to tell TypeScript that a value is not null or undefined, even if TypeScript cannot determine that from the code
// This can be useful in situations where you are certain that a value will not be null or undefined, but TypeScript's type checking cannot guarantee that
// NOTE: No TypeScript error, but 💥 Runtime crash if the value is null or undefined
// NOTE: Use ! only when you are 100% certain the value exists. Otherwise prefer ?. (optional chaining operator)

// Use-case 1: Basic variable
let name: string | null;

// console.log(name.toUpperCase());  // CTE: Variable 'name' is used before being assigned
// console.log(name!.toUpperCase()); // TypeScript trusts you; no CTE, but runtime error if name is null or undefined

// ---------------------------------------------------------------------------

// Use-case 2: DOM element selection
// document.getElementById returns HTMLElement | null

// const btn = document.getElementById('submit'); // CTE: 'btn' is possibly 'null'
const btn = document.getElementById('submit')!; // TypeScript trusts you; no CTE, but runtime error if btn is null or undefined
btn.addEventListener('click', () => console.log('clicked'));

// ---------------------------------------------------------------------------

// Use-case 3: Array indexing
let users = ['Alice', 'Bob', 'Charlie'];
// console.log(users[1].toUpperCase()); // CTE: Object is possibly 'undefined'
console.log(users[1]!.toUpperCase()); // BOB

// ---------------------------------------------------------------------------

// Use-case 4: Object property
type User = {
  name: string; // required
  address?: string; // optional — may be undefined
};

const user: User = { name: 'Alice', address: 'Delhi' };
// console.log(user.address.toUpperCase()); // CTE: 'user.address' is possibly 'undefined'
console.log(user.address!.toUpperCase()); // DELHI

// ---------------------------------------------------------------------------

// Use-case 5: Function return value
function findUser(): string | null {
  return 'Bob';
}
// const result = findUser();  // CTE: 'result' is possibly 'null'
const result = findUser()!;
console.log(result.toUpperCase()); // "BOB"
