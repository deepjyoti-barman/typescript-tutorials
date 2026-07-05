// conditional type operator (T extends U ? X : Y)
// The conditional type operator in TypeScript allows you to create types that depend on a condition
// It takes the form of `T extends U ? X : Y`, where T is the type you want to check, U is the type you want to compare against, X is the type that will be used if T extends U, and Y is the type that will be used if T does not extend U

// NOTE: Conditional types are advanced, we usually see them in reusable libraries and framework utilities

// Use-case 1: Basic conditional type
type IsString<T> = T extends string ? 'Yes' : 'No';

type Result1 = IsString<string>; // "Yes"
type Result2 = IsString<number>; // "No"

let name: Result1 = 'Yes'; // Valid
// let age: Result2 = "Yes"; // Error: Type 'Yes' is not assignable to type 'No'
console.log('name:', name);

// ---------------------------------------------------------------------------------

// Use-case 2: Return type based on input type
type ApiResult<T> = T extends true ? 'Success' : 'Failure';

type SuccessResult = ApiResult<true>; // "Success"
type FailureResult = ApiResult<false>; // "Failure"

// ---------------------------------------------------------------------------------

// Use-case 3: Extract array item type
type ItemType<T> = T extends Array<infer Item> ? Item : T;

type Browser = ItemType<string[]>; // string
type Status = ItemType<number[]>; // number
type Name = ItemType<string>; // string

// ---------------------------------------------------------------------------------

// Use-case 4: Conditional types with union types
type CheckType<T> = T extends string
  ? 'String'
  : T extends number
    ? 'Number'
    : 'Other';

type Type1 = CheckType<string>; // "String"
type Type2 = CheckType<number>; // "Number"
type Type3 = CheckType<boolean>; // "Other"

// ---------------------------------------------------------------------------------

// Use-case 5: API response example
type ApiResponse<T> = T extends 'success'
  ? { status: 'success'; data: string }
  : { status: 'error'; message: string };

let successResponse: ApiResponse<'success'> = {
  status: 'success',
  data: 'User created',
};

let errorResponse: ApiResponse<'error'> = {
  status: 'error',
  message: 'Something failed',
};

console.log('successResponse:', successResponse);
console.log('errorResponse:', errorResponse);
