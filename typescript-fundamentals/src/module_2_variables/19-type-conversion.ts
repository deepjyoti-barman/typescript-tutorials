// Type conversion
// Type Conversion is the process of converting a value from one data type to another, which changes the value’s type at runtime
// It is done using built-in functions like Number(), String(), and Boolean()
// NOTE: Type Conversion (Number(), String(), Boolean()) changes the value at runtime

// string -> number
let age: string = '25';
let numAge = Number(age);

console.log(typeof numAge); // number

// number -> string
let id: number = 101;
let strId = String(id);

console.log(typeof strId); // string

// number -> boolean
let value: number = 1;
let isActive = Boolean(value);

console.log(isActive); // true
