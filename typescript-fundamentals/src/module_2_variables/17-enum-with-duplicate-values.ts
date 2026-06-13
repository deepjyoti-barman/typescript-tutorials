// Example of enum with duplicate values
// TypeScript allows duplicate enum values

// Low and Medium both have the same value: 10
// High comes after Medium, so TypeScript assigns it Medium + 1
// That means High becomes 11
enum Priority {
  Low = 10,
  Medium = 10,
  High,
}

console.log(Priority.Low); // 10
console.log(Priority.Medium); // 10
console.log(Priority.High); // 11

// Numeric enums create reverse mapping
// and is one tricky part with numeric enum reverse mapping

// Priority.Low means 10
// Priority.Medium also means 10
// Internally, TypeScript creates something similar to:
// Priority[10] = "Low"
// Priority[10] = "Medium"

// Medium comes later, so it overwrites Low in reverse mapping
console.log(Priority[10]); // "Medium"
console.log(Priority.Low === Priority.Medium); // true
console.log(Priority[Priority.Low]); // "Medium"

// -----------------------------------------------------------------------------------

// NOTE: Avoid duplicate enum values unless you intentionally want aliases.

enum TestStatus {
  Passed = 'passed',
  Success = 'passed', // alias for same meaning
}

// This is okay only if both names truly mean the same thing
