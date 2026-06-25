// optional chaining operator (?.)
// optional chaining operator is a new feature in TypeScript that allows you to access properties of an object without having to check if the object is null or undefined
// It is represented by the ?. operator and can be used to safely access properties of an object that may be null or undefined
const user = {
  profile: {
    email: 'qa@example.com',
  },
};

console.log(user.profile?.email); // qa@example.com

// ---------------------------------------------------------------------------

const userFromApi: any = {};
console.log(userFromApi.profile); // undefined
console.log(userFromApi.profile?.phone.countryCode); // undefined

// Without ?. this may throw an error:
// Cannot read properties of undefined
// console.log(userFromApi.profile.phone); // Error
