// enum type:
// Enum (= short for "enumeration") type is used to define a set of named constants where each constant has a unique value associated with it
// It helps when a variable should only have one value from a known list
// Recommended: Use enum type when you have a fixed set of related constants that you want to group together

// Without enum, we may write strings manually again and again:
let browser = 'chrome';

// Problem:
// If someone writes "Chrome", "CHROME", "chrom", etc
// TypeScript may not catch it unless we use strict types

// Enum helps us define allowed values in one place
// Naming Convention: Enum name usually uses PascalCase
enum Browser {
  // Naming Convention: Enum members also usually use PascalCase
  Chrome,
  Firefox,
  Safari,
}

// Here Browser is the enum name
// Chrome, Firefox, Safari are enum members
// We can now use enum values like this:
let selectedBrowser: Browser = Browser.Chrome;

console.log(selectedBrowser); // Output: 0

// Enum stores the numeric values for each member
// By default, TypeScript gives numeric values starting from 0
console.log(Browser.Chrome); // 0
console.log(Browser.Firefox); // 1
console.log(Browser.Safari); // 2
