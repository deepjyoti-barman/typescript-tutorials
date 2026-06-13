// heterogeneous enum:
// This means mixing numbers and strings in the same enum
enum MixedEnum {
  Yes = 'YES',
  No = 0,
}

console.log(MixedEnum.Yes); // YES
console.log(MixedEnum.No); // 0

// This is allowed by TypeScript, but usually not recommended

// Important note:
// Avoid heterogeneous enums because they are confusing
// In real test automation projects, prefer string enums
