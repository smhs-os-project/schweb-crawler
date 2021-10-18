/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  // https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
