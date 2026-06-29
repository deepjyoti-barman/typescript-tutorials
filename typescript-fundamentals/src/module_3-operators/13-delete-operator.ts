// delete operator
// delete operator is used to remove a property from an object
// But it does not affect the prototype chain; it only removes the property from the object itself
// The delete operator is often used in situations where you want to clean up an object by removing properties that are no longer needed or to avoid memory leaks
// It returns true if the property was successfully deleted, or false if it was not (for example, if the property is non-configurable)
// NOTE: In TypeScript, property should usually be optional or marked as optional with a question mark (?) to avoid type errors when using the delete operator

// Use-case 1: Delete a property from an object
let person: { name: string; age?: number } = {
  name: 'John Doe',
  age: 30,
};

delete person.age;

console.log(person); // { name: 'John Doe' }

// ---------------------------------------------------------------------------------

// Use-case 2: Remove sensitive data
type User = {
  username: string;
  password?: string;
  role: string;
};

let user: User = {
  username: 'admin@example.com',
  password: 'Password123',
  role: 'admin',
};

delete user.password;

console.log(user); // { username: 'admin@example.com', role: 'admin' }

// ---------------------------------------------------------------------------------

// Use-case 3: Delete dynamic property
let testData: Record<string, string> = {
  username: 'qa_user',
  password: 'Password123',
};

delete testData['password'];

console.log(testData); // { username: 'qa_user' }

// ---------------------------------------------------------------------------------

// Use-case 4: Prefer destructuring instead of delete
// NOTE: delete changes the original object, while destructuring creates a new object without the property
let vehicle: { make: string; model: string; licensePlateNo: string } = {
  make: 'Honda',
  model: 'Dio',
  licensePlateNo: 'KA01-HI-1234',
};

let { licensePlateNo, ...safeVehicle } = vehicle;

console.log(safeVehicle); // { make: 'Honda', model: 'Dio' }
