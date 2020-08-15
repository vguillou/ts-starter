# ts-starter

A comfortable TypeScript starter project.

## Usage

### Prerequisites

-   Install [Yarn](https://yarnpkg.com/)
-   [Node.js](https://nodejs.org/) >= 12.16.1
-   An IDE/Code editor (recommended: [VS Code](https://code.visualstudio.com/))

### Install dependencies

```sh
yarn
```

### Available scripts

- `yarn build` Build the project (outputs to the `./lib` directory)
- `yarn test` Run all tests
- `yarn test:watch` Continuously run all tests after each change in source files
- `yarn lint` Lint the source files, fixing any fixable code or formatting error
- `yarn scan` Scan dependencies for known vulnerabilities

### VS Code Debug configurations

- `Jest All` Launch all tests in debug mode
- `Jest Current File` Launch only the tests of the file currently opened in your Editor, if any
- `Jest Attach` Attach the debugger to a Node process. Run it after launching `yarn test:watch`

### Package your Code

Just run `yarn build`.
Considering your target runtime, you also probably should adjust the [ESLint configuration](https://eslint.org/docs/user-guide/configuring) (`.eslintrc.js`) and [TypeScript configuration](https://www.typescriptlang.org/tsconfig) (`tsconfig.json` as well as `tsconfig-build.json`, the later being used exclusively during packaging)

## Features

### Editor config for any other IDE

### Use the very last TypeScript features
- Look for configuration in `tsconfig.json` (as well as `tsconfig-build.json`)

### A Test friendly environment
- Feature using Jest and VS Code debugging configurations. See the list of commands above
- Using good defaults for Jest's configuration (see `jest.config.js`)
- VS Code debugging configurations can be found in `.vscode/launch.json`

### Linting and formatting on save, automatically fixing minor issues
- Feature using ESLint, Prettier, and VS Code config
- Look for configuration in `.eslintrc.js` mainly, but also `.eslintignore`, `.prettierignore` and `.vscode/settings.json`

### Linting and formatting on commit, automatically fixing minor issues
- Feature using Lint-Staged and Husky, in addition of the tools mentioned previously
- Look for configuration in `package.json` (see `husky > hooks` and `lint-staged` attributes)

### Custom import resolving
Say, you prefer to type `@src/index` to import this file from anywhere, rather than its relative path (something like `../../../../../index`)
- Feature using TypeScript and ts-jest
- Look for configuration in `tsconfig.json` (`compilerOptions > paths`)
