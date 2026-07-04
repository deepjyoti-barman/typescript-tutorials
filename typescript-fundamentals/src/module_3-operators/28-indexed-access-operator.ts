// indexed access operator (Type['key'])
// The indexed access operator allows you to access the type of a property of an object type
// It is useful when you want to refer to the type of a specific property in a type-safe manner

// Use-case 1: Single property type
type User = {
  username: string;
  age: number;
};

type UsernameType = User['username']; // UsernameType is inferred as string
let username: UsernameType = 'qa_user';
console.log('username:', username);

// ---------------------------------------------------------------------------------

// Use-case 2: Use existing type in function
type UserType = {
  username: string;
  role: 'admin' | 'viewer';
};

function printRole(role: UserType['role']): void {
  console.log(role);
}

printRole('admin');
printRole('viewer');
// printRole('editor'); // CTE: Argument of type 'editor' is not assignable to parameter of type 'admin' | 'viewer'

// ---------------------------------------------------------------------------------

// Use-case 3: Array item type
type Users = {
  username: string;
  role: string;
}[];

// ArrayType[number] gets the type of one array item
type SingleUser = Users[number]; // SingleUser is inferred as { username: string; role: string; }

let user: SingleUser = {
  username: 'qa_user',
  role: 'admin',
};
console.log('user:', user);
