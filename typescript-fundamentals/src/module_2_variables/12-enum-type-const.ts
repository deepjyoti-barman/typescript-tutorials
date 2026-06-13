// const enum:
// A const enum is optimized by TypeScript during compilation
// It is inlined at compile time, meaning that the enum values are replaced with their actual values in the generated JavaScript code
// This can improve performance and make generated JavaScript smaller

// But const enums can cause issues in some build tools especially when code is shared across packages

// For learning and normal Playwright usage regular string enum is usually safer
const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

let move = Direction.Up;

console.log(move); // Output: 'UP'
