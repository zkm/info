module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/__test__/**/*.test.js'],
  // Transforms test files with babel-jest, using .babelrc, so `import`/`export`
  // syntax works under Jest's CommonJS runner. Webpack doesn't need this — it
  // handles ES modules natively — so .babelrc exists for tests only.
};
