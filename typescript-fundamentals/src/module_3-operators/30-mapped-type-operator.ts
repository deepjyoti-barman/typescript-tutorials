// mapped type operator [K in keyof T]
// mapped type operator allows us to create new type by looping over keys of another type
// For example, we can create a new type that has the same keys as an existing type, but with different value types

// Use-case 1: Make all properties boolean
type User = {
  username: string;
  password: string;
};

type ValidationResult<T> = {
  [K in keyof T]: boolean;
};

type UserValidation = ValidationResult<User>;

let result: UserValidation = {
  username: true,
  password: false,
};

console.log('result:', result);

// ---------------------------------------------------------------------------------

// Use-case 2: Make all properties optional
// NOTE: TypeScript already has built-in Partial<T> type that does this
type UserDetails = {
  username: string;
  password: string;
};

type MyPartialDetails<T> = {
  [K in keyof T]?: T[K];
};

type PartialUserDetails = MyPartialDetails<UserDetails>;

// password is optional now
let partialUserDetails: PartialUserDetails = {
  username: 'admin@example.com',
};

console.log('partialUserDetails:', partialUserDetails);

// ---------------------------------------------------------------------------------

// Use-case 3: Make all properties readonly
// NOTE: TypeScript already has built-in Readonly<T> type that does this
type Config = {
  env: string;
  baseUrl: string;
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

let config: MyReadonly<Config> = {
  env: 'qa',
  baseUrl: 'https://qa.example.com',
};

// config.env = 'prod'; // Error: Cannot assign to 'env' because it is a read-only property
console.log('config:', config);

// ---------------------------------------------------------------------------------

// Use-case 4: Convert object properties to string
type ApiResponse = {
  statusCode: number;
  isSuccess: boolean;
};

type StringifyValues<T> = {
  [K in keyof T]: string;
};

type StringApiResponse = StringifyValues<ApiResponse>;

let response: StringApiResponse = {
  statusCode: '200',
  isSuccess: 'true',
};

console.log('response:', response);

// ---------------------------------------------------------------------------------

// Use-case 5: QA validation object
type LoginData = {
  username: string;
  password: string;
};

type FieldErrors<T> = {
  [K in keyof T]?: string;
};

// password error is optional
let loginErrors: FieldErrors<LoginData> = {
  username: 'Username is required',
};

console.log('loginErrors:', loginErrors);
