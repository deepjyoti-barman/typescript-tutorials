// Union type:
// A variable can hold multiple types of values using union types
// Union types are defined using the pipe (|) symbol
// Recommended: Use union types when a variable can hold more than one type of values
// Example usage - 1:
let userId: number | string;

userId = 'Rahul';
userId = 1287767391;

// Example usage - 2:
function getUserInfo(customerId: number | string): string | null {
  if (typeof customerId === 'number') {
    return 1001 + '_richard-parker';
  } else if (typeof customerId === 'string') {
    return 1002 + '_neil-jones';
  }
  return null;
}

console.log(getUserInfo(18273));
console.log(getUserInfo('test'));
