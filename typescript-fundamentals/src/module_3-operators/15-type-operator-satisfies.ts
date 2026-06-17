// satisfies keyword
// satisfies checks that an object matches a type while preserving its inferred type
// it's useful when you want to use a type as a constraint without losing the specific type information of the object
type TestConfig = {
  browser: string;
  retries: number;
};

// If you remove retries or assign it a string instead of a number, TypeScript reports an error.
const config = {
  browser: 'Chrome',
  retries: 2,
} satisfies TestConfig;

console.log(config);
