module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.+(ts|tsx|js)',
    '!**/node_modules/**',
    '!./src/index.ts',
    '!./src/**/*/index.ts',
    '!./src/**/*.stories.(ts|tsx|js|jsx)',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -1,
    },
  },
  errorOnDeprecated: true,
  notify: true,
  preset: 'ts-jest',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        outputPath: 'docs/test_report.html',
        pageTitle: 'Test Report',
      },
    ],
  ],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
