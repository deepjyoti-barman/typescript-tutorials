# Basic Node.js Project Setup

## 1. Initialize Project

```bash
# Create the package.json file entering project related details manually
npm init

# Quickly create the package.json file with prefilled settings
npm init -y
```

---

## 2. Enable ES Modules in package.json

```json
{
  "type": "module", // Enables ES Modules (import/export syntax) instead of CommonJS (require/module.exports)
  "main": "index.ts"
}
```

---

## 3. Install Dev Dependencies

```bash
npm install --save-dev typescript tsx eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier
```

---

## 4. Initialize TSConfig

```bash
npx tsc --init
```

This creates:

```bash
tsconfig.json
```

## 5. Update TSConfig File Contents

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",

    "rootDir": "./src",
    "outDir": "./dist",

    "strict": true,
    "noImplicitAny": true,
    "noUncheckedIndexedAccess": true,
    "useUnknownInCatchVariables": true,

    "esModuleInterop": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,

    "forceConsistentCasingInFileNames": true
  },

  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## 6. Create a TypeScript File in src Directory

```ts
// Filename: index.ts
// To resolve error message in TSConfig file
console.log("Hello TypeScript");
```

---

## 7. Initialize ESLint

```bash
npx eslint --init
```

This creates:

```bash
eslint.config.ts
```

---

## 8. Update ESLint File Contents

```ts
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist", "node_modules"],
  },

  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node,
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  tseslint.configs.recommendedTypeChecked,
  prettier,
]);
```

---

## 9. Create Prettier Config

```bash
touch .prettierrc
```

### `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

---

## 10. Create `.gitignore`

```bash
touch .gitignore
```

### `.gitignore`

```gitignore
# =========================
# Playwright output
# =========================
playwright-report/
test-results/
blob-report/
playwright/.cache/

# =========================
# TypeScript build output
# =========================
dist/
build/
out/
tmp/
*.tsbuildinfo

# =========================
# Dependencies
# =========================
node_modules/

# =========================
# Logs
# =========================
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# =========================
# Environment variables
# =========================
.env
.env.*

# =========================
# Coverage (if used later)
# =========================
coverage/
.nyc_output/

# =========================
# ESLint cache
# =========================
.eslintcache

# =========================
# IDE - VSCode
# =========================
.vscode/
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# =========================
# IDE - WebStorm / JetBrains
# =========================
.idea/
*.iml

# =========================
# macOS / system files
# =========================
.DS_Store
.AppleDouble
.LSOverride
._*
Thumbs.db
```

---

## 11. Add Scripts in `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

---

## 12. Run Commands

### Run ESLint

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

---

## 13. Running TypeScript Files

This document explains different ways to compile and run TypeScript files — from traditional compilation to modern runtime options.

### 1. Traditional way to compile and run TypeScript files

```bash
# Check TypeScript version (when installed as a devDependency)
npx tsc --version

# Check TypeScript version (when installed globally)
tsc --version
```

```bash
# Compile all files and run output
# Compiles all .ts files inside the ./src directory and generates JavaScript output in the ./dist directory
npx tsc

# Run a specific compiled file
node ./dist/intro.js
```

```bash
# Compile and run a single file
# Compile a specific TypeScript file
npx tsc ./src/intro.ts

# Run its compiled JavaScript output
node ./dist/intro.js
```

### 2. Standard way to run TypeScript files (ts-node)

```bash
# Install ts-node as a dev dependency
npm install --save-dev ts-node

# Compile and run TypeScript directly (no manual build step)
npx ts-node ./src/intro.ts
```

### 3. Fastest way to run TypeScript files (recommended)

**Why use this approach?**

- Faster startup speed
- Excellent ESM support
- Minimal configuration
- Built-in watch mode
- Recommended for modern Node.js projects

```bash
# Install tsx as a dev dependency
npm install --save-dev tsx

# Run TypeScript file directly
npx tsx src/index.ts

# Watch mode (auto-reload on changes)
npx tsx watch src/index.ts
```

---
