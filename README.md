# Vue Template

A complete Vue starter template with TypeScript

## Optional features

* Tailwind
* SCSS
* Vue Router
* Pinia
* Vitest
* Playwright
* Prettier

If you don't need an optional feature, you can just delete it or keep it for later.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/template/wODTj4?referralCode=AkTUld)

## How to use

```sh
# Install dependencies
npm install

# Run Vue app
npm run dev

# Build Vue app for production
npm run build

# Run preview of production build
npm run preview
```

## Optional Unit & End-to-End Testing

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```
