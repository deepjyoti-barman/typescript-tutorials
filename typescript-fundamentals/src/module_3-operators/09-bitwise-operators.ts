// bitwise operators
// bitwise operators are used to perform operations on the binary representation of numbers
// They work at the bit level, manipulating individual bits of the operands

// The common bitwise operators in TypeScript (and JavaScript) include:
// 1. Bitwise AND (&)
// 2. Bitwise OR
// 3. Bitwise XOR (^)
// 4. Bitwise NOT (~)
// 5. Left Shift (<<)
// 6. Right Shift (>>)
// 7. Unsigned Right Shift (>>>)

// Bitwise AND
// The bitwise AND operator (&) returns a number with bits set to 1 only where both corresponding bits of the operands are 1
// 5 = 101
// 3 = 011
// & = 001 = 1
console.log('5 & 3:', 5 & 3); // 1

// ---------------------------------------------------------------------------------

// Bitwise OR
// The bitwise OR operator (|) returns a number with bits set to 1 where at least one of the corresponding bits of the operands is 1
// 5 = 101
// 3 = 011
// | = 111 = 7
console.log('5 | 3:', 5 | 3); // 7

// ---------------------------------------------------------------------------------

// Bitwise XOR
// The bitwise XOR operator (^) returns a number with bits set to 1 where the corresponding bits of the operands are different
// 5 = 101
// 3 = 011
// ^ = 110 = 6
console.log('5 ^ 3:', 5 ^ 3); // 6

// ---------------------------------------------------------------------------------

// Bitwise NOT
// The bitwise NOT operator (~) inverts the bits of its operand i.e. it flips 0s to 1s and 1s to 0s
// In TypeScript (and JavaScript), numbers are represented in a signed 32-bit integer format, so applying the bitwise NOT operator to a number will yield its two's complement negative value minus one
// NOTE: ~x means -(x + 1)
console.log('~5:', ~5); // -6

// ---------------------------------------------------------------------------------

// Left Shift
// The left shift operator (<<) shifts the bits of its operand to the left by a specified number of positions, filling the rightmost bits with zeros
// This effectively multiplies the number by 2 for each shift position
console.log('5 << 1:', 5 << 1); // 10

// ---------------------------------------------------------------------------------

// Right Shift
// The right shift operator (>>) shifts the bits of its operand to the right by a specified number of positions, filling the leftmost bits with the sign bit (0 for positive numbers and 1 for negative numbers)
// This effectively divides the number by 2 for each shift position
console.log('10 >> 1:', 10 >> 1); // 5

// ---------------------------------------------------------------------------------

// Unsigned Right Shift
// The unsigned right shift operator (>>>) shifts the bits of its operand to the right by a specified number of positions, filling the leftmost bits with zeros regardless of the sign of the number
// This is useful for working with unsigned integers
console.log('-10 >>> 1:', -10 >>> 1); // 2147483643
