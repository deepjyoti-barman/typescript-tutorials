// void type:
// The void type represents the absence of a value
// void can only be assigned to undefined
// It is commonly used as the return type of functions that do not return a value.
// Recommended: Use void for functions that do not return anything
let a: void = undefined;

function printHello(name: string): void {
  console.log(`Hello ${name}`);
}

printHello('Deepjyoti');
