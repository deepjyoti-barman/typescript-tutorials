// ternary statements
// ternary statements are a concise way to write an if-else statement
// They are also known as the conditional operator
// Recommendation: Use ternary for small/simple conditions, use if else or switch when logic becomes bigger
let responseTime = 450;

let performanceResult = responseTime < 500 ? "Good" : "Slow";

console.log(performanceResult); // Good