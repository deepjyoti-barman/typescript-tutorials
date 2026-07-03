// optional property operator (?)
// The optional property operator is used in TypeScript to indicate that a property (of an object) or parameter (of a function) may or may not be present
// This is particularly useful when defining interfaces or types for objects where some properties are optional

// NOTE: Optional property operator is ? and it is not ?:
// NOTE: ?: is used in ternary operator or conditional types

// Use-case 1: Optional property in an object type
type Profile = {
  username: string;
  bio?: string; // not every profile has a bio
};

const user1: Profile = {
  username: 'alice',
};

const user2: Profile = {
  username: 'john',
  bio: 'I am a part time blogger and a full time developer!',
};

console.log(user1.bio); // undefined - no crash, but no value
// console.log(user1.bio.length); // CTE: 'user1.bio' is possibly undefined
console.log(user1.bio?.length); // undefined — safe with optional chaining
console.log(user1.bio!.length); // Runtime crash, its preferred not to use non-null assertion operator (!) when the value is possibly undefined

// Accessing optional property with default value
console.log(user1.bio ?? 'No bio available'); // "No bio available" — safe with nullish coalescing operator (??)

// ---------------------------------------------------------------------------------

// Use-case 2: Optional function parameter
function login(username: string, password?: string): void {
  console.log(username);

  if (password) {
    console.log('Password is provided');
  } else {
    console.log('Password is missing');
  }
}

login('qa_user');
login('qa_user', 'Password123');

// ---------------------------------------------------------------------------------

// Use-case 3: (QA) Optional property in API response
type ApiResponse = {
  status: number;
  message?: string;
};

const response: ApiResponse = {
  status: 200,
};

// message may or may not come from API
console.log(response.message);
