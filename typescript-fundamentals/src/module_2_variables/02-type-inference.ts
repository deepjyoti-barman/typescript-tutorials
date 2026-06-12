// Type inference:
// Type inference is a powerful feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its initial value
// This can help reduce the amount of explicit type annotations needed in your code, while still providing strong type safety
// TypeScript can automatically infer the type of a variable based on the value assigned to it
let city = 'Delhi';
city = 123; // Error, as auto-assignment to a string type occurred in the previous statement implicitly

// ---------------------------------------------------------------------------

const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
// let isMovieFound; // Not Recommended: TypeScript infers the type of isMovieFound as any, since it is not initialized with a value
let isMovieFound: boolean; // Recommended

for (let movie of movies) {
  if (movie === 'Amadeus') {
    isMovieFound = movie; // CTE
  }
}
