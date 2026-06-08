# TypeScript Fundamentals

## What is TypeScript and what are the features provided by TypeScript?

- TypeScript is an open-source programming language developed and maintained by Microsoft.
- It was launched in October 2012 by Microsoft Corporation.
- It is a strict syntactical superset of JavaScript, a language building up on JavaScript.
- TypeScript takes the JavaScript language and adds new features and advantages to it.
- It makes writing JavaScript code easier, cleaner and more powerful.
- But, as a disadvantage TypeScript can't be executed by JavaScript environments like the browser (nor by Node.js).
- TypeScript is designed for development of large applications and it transcompiles to plain old normal JavaScript.
- The TypeScript compiler compiles these new features provided by TypeScript to JavaScript 'workarounds' (a nicer syntax, an easier way of doing something and it will compile that to a more complex JavaScript snippet).
- TypeScript can't add what is not all possible in JavaScript language, but it can add new features that are simply easier to use.
- TypeScript adds types, which will actually give you as a Developer an opportunity of identifying errors in your code earlier before the script runs and the error occurs at runtime in the browser.
- As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

## What are the advantages provided by TypeScript?

- TypeScript adds types in data super important, which inturn adds an extra error check that eliminates many unexpected and unnecessary errors.
- We can get next-generation JavaScript features - we can type and write TypeScript in a file and then we can compile it down to JavaScript 'workarounds' which will even work in older browsers (Just the tool Babel is used convert modern JavaScript run in older browsers).
- TypeScript adds Non-JavaScript features like Interfaces or Generics.
- TypeScript also adds meta programming features like Decorators.
- TypeScript is highly configurable.
- Modern tooling and modern IDE's you can get support in Non-TypeScript projects.

## JavaScript vs TypeScript

| Feature              | JavaScript                                           | TypeScript                                                     |
| -------------------- | ---------------------------------------------------- | -------------------------------------------------------------- |
| Definition           | A scripting language used to build web applications. | A superset of JavaScript that adds static typing.              |
| Type System          | Dynamically typed.                                   | Statically typed.                                              |
| Error Detection      | Errors are usually found at runtime.                 | Many errors are caught during compilation.                     |
| Compilation          | Runs directly in browser/Node.js.                    | Must be transpiled to JavaScript before execution.             |
| Code Maintainability | Harder to maintain in large projects.                | Easier to maintain due to type safety.                         |
| IDE Support          | Basic auto-completion and suggestions.               | Better IntelliSense, auto-completion, and refactoring support. |
| Learning Curve       | Easier for beginners.                                | Slightly steeper due to types and additional features.         |
| Scalability          | Suitable for small to medium projects.               | Ideal for medium to large-scale applications.                  |
| OOP Features         | Supports OOP but without type enforcement.           | Supports OOP with strong type checking.                        |
| File Extension       | .js                                                  | .ts                                                            |

### Example

#### JavaScript

```javascript
let age = 25;
age = "Twenty Five"; // Valid
```

#### TypeScript

```typescript
let age: number = 25;
age = "Twenty Five"; // Compilation Error
```

> Interview Answer (1 Line):
>
> TypeScript is JavaScript with static typing and additional development features that help catch errors before the code runs.

## Why Use TypeScript Over JavaScript

## How TypeScript Saves a Developer's Life

### 1. Catches Errors Early

TypeScript detects type-related mistakes during development instead of at runtime.

```typescript
function greet(name: string) {
  return "Hello " + name;
}

greet(123); // Error detected before execution
```

---

### 2. Better Auto-Completion

Provides accurate suggestions for variables, functions, methods, and object properties.

```typescript
const user = {
    name: "John",
    age: 25
};

user. // IDE shows name and age
```

---

### 3. Easier Refactoring

When renaming variables, methods, or classes, TypeScript helps update references safely across the project.

---

### 4. Self-Documenting Code

Types explain what data is expected without reading additional documentation.

```typescript
function calculateTax(amount: number): number {
  return amount * 0.18;
}
```

---

### 5. Reduces Production Bugs

Many common bugs are caught during compilation before reaching users.

---

### 6. Better Team Collaboration

Developers can understand APIs and function contracts quickly through types.

---

### 7. Ideal for Large Projects

As applications grow, TypeScript makes code easier to maintain, debug, and scale.

---

> Interview Answer (2 Lines):
>
> TypeScript improves code quality by catching errors during development through static typing. It provides better tooling, maintainability, and scalability, making it ideal for large and long-term projects.

## TypeScript Naming Conventions

Following standard naming conventions improves code readability, maintainability, and consistency across projects.

| Element       | Convention                  | Example             |
| ------------- | --------------------------- | ------------------- |
| File Name     | Kebab Case                  | intro-typescript.ts |
| Class Name    | Pascal Case                 | LoginTest           |
| Function Name | Camel Case                  | getUserDetails()    |
| Variable Name | Camel Case                  | userName            |
| Constant Name | Upper Case with Underscores | NO_OF_USERS         |

---

### 1. File Name - Kebab Case

Use lowercase words separated by hyphens (-).

```txt
intro-typescript.ts
user-service.ts
login-page.ts
```

#### Rules for File Name

- All letters should be lowercase.
- Separate multiple words using a hyphen (-).

---

### 2. Class Name - Pascal Case

Capitalize the first letter of every word.

```typescript
class LoginTest {}

class UserService {}

class ApiClient {}
```

#### Rules for Class Name

- First letter of each word should be uppercase.
- No spaces or underscores.

---

### 3. Function Name - Camel Case

The first word starts with a lowercase letter, and each subsequent word starts with an uppercase letter.

```typescript
function getUserDetails() {}

function loginUser() {}

function calculateTax() {}
```

#### Rules for Function Name

- First word starts with lowercase.
- Remaining words start with uppercase.

---

### 4. Variable Name - Camel Case

Variables should follow the same convention as functions.

```typescript
let userName = "John";
let totalAmount = 1000;
let isLoggedIn = true;
```

#### Rules for Variable Name

- Use meaningful names.
- Follow camelCase format.

---

### 5. Constant Name - Upper Case

Constants are written in uppercase letters with words separated by underscores (\_).

```typescript
const NO_OF_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const MAX_RETRY_COUNT = 3;
```

#### Rules for Constant Name

- Use uppercase letters only.
- Separate words using underscores (\_).
- Use for values that should not change.
