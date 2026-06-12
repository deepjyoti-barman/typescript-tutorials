// unknown type:
// unknown is a safer alternative to any
// unknown allows you to assign any type of value to a variable, but it requires you to perform type checks before using the variable
// Recommended: Use unknown when you want to allow any type but want to enforce type safety
let y: unknown = 'world';

if (typeof y === 'string') {
  console.log(y.toUpperCase());
}
