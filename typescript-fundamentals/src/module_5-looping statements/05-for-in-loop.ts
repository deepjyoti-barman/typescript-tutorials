// for...in loop
// for...in loop is used to loop over object keys
// It returns the key of an object in each iteration

// NOTE:
// for...in is mainly for objects
// for...of is mainly for arrays
const user = {
  username: 'qa_user',
  role: 'admin',
  active: true,
};

// Access only keys of an object using for...in loop
for (const key in user) {
  console.log('key:', key);
}

// Access keys and values dynamically of an object using for...in loop
for (const key in user) {
  // Error message, if directly used user[key]:
  // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type...

  // Evaluation of the used expression
  // typeof user: Gets the typeof the object
  // type UserType = { username: string, role: string, active: boolean }

  // keyof typeof user: Gets all the keys as union
  // type UserKeys = 'username' | 'role' | 'active';

  // key as keyof typeof user: Tells TypeScript that key is a valid key of UserType, because key could be anything ('random', 'hello' etc.)

  // user[key as keyof typeof user]: Access value dynamically
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}
