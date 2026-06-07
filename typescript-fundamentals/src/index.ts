console.log('Hello, World');

// Function to add two numbers
function add(a: number, b: number): number {
  return a + b;
}

let employee: { id: number; name: string; address: string } = {
  id: 1,
  name: 'Deepjyoti',
  address: 'Bangalore',
};

// Write a function to print employee details
function printEmployeeDetails(employee: {
  id: number;
  name: string;
  address: string;
}): void {
  console.log(
    `ID: ${employee.id}, Name: ${employee.name}, Address: ${employee.address}`,
  );
}

function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
