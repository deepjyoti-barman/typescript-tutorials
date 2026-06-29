// void operator
// void operator is used to evaluate an expression and return undefined
// It is often used in situations where you want to ignore the return value of a function or expression
// void is more commonly used as a function return type than as an operator

// Use-case 1:void as function return type
function printMessage(message: string): void {
  console.log(message);
}

printMessage('Hello, World!'); // Output: Hello, World!

// ---------------------------------------------------------------------------------

// Use-case 2: void as operator
let result = void 10;

console.log(result); // undefined

// ---------------------------------------------------------------------------------

// Use-case 3: Ignore promise result
// This means: call saveLog(), but intentionally ignore returned Promise
// NOTE: Be careful, ignoring promises can hide errors if not handled properly
async function saveLog(): Promise<void> {
  console.log('Saving log');
}

void saveLog(); // Saving Log

// ---------------------------------------------------------------------------------

// Use-case 4: Event handler style
// Sometimes used to show we intentionally ignore async result
let button = document.getElementById('myButton')!;
button.addEventListener('click', () => void saveLog());
