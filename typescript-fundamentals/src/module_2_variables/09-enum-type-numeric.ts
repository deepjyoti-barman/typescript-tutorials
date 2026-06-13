// Enums can be of 4 types:
// 1. Numeric enums
// 2. String enums
// 3. Heterogeneous enums (mix of numeric and string values)
// 4. Const enums (a special kind of numeric enums that are inlined at compile time)

// numeric enums:
// This is the default enum type
// By default, the first constant is assigned the value 0, and the value of each subsequent constant is incremented by 1
enum TestStatus {
  Passed,
  Failed,
  Skipped,
}

// TypeScript automatically assigns numbers:
// Passed  = 0
// Failed  = 1
// Skipped = 2

let result: TestStatus = TestStatus.Passed;

if (result === TestStatus.Passed) {
  console.log('Test case passed');
}

// -----------------------------------------------------------------------------------

// You can also assign custom values to the constants, next values increase automatically
enum Direction {
  North,
  South,
  East = 10,
  West,
}

let moreTowardsSouth: Direction = Direction.South;
console.log(moreTowardsSouth); // Output: 1

let moveTowardsWest: Direction = Direction.West;
console.log(moveTowardsWest); // Output: 11

// -----------------------------------------------------------------------------------

// Numeric enums support reverse mapping
enum StatusCode {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

// Enum also stores values in reverse mapping as well
console.log(StatusCode);

console.log(StatusCode.OK); // 200
console.log(StatusCode[200]); // "OK"
console.log(StatusCode[404]); // NotFound

// NOTE: Reverse mapping works only with numeric enums
// It does not work with string enums

// -----------------------------------------------------------------------------------

// Enum values can be computed
// NOTE: But for QA automation, keep enums simple and readable
enum FileSize {
  Small = 10,
  Medium = Small * 10,
  Large = Medium * 10,
}

console.log(FileSize.Small); // 10
console.log(FileSize.Medium); // 100
console.log(FileSize.Large); // 1000
