// infer type
// infer is a keyword in TypeScript that allows you to infer the type of a variable or expression based on its usage
// It is often used in conditional types to extract types from complex structures
// It is useful for creating reusable utility types without manually specifying the extracted type

// Define a conditional type that inspects T
// type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type GetReturnType<T> = T extends () => infer R ? R : never;

// Create a dummy function
function getUser() {
  return { id: 1, name: 'Alice' };
}

// Extract the return type dynamically using the function's type
type User = GetReturnType<typeof getUser>;
// Resulting Type: { id: number; name: string; }
