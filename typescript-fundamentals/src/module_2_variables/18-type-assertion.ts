// Type assertion
// Type assertion in TypeScript is a way to tell the TypeScript compiler about the type of a variable when the compiler cannot infer it
// It is done using the 'as' keyword or angle brackets syntax

// 1. Using angular brackets <>
let foodBill: any = 123;
let tax: number = 50;
let finalBill = <number>foodBill * (tax / 100) + 50;
console.log('finalBill:', finalBill);

// 2. Using as
let header: any = 'Welcome to TypeScript';
let headerLength = (header as string).length;
console.log('headerLength:', headerLength);
