/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?*.)+(spec|test).[tj]s?(x)"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

// export default {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testMatch: ["**/**/*.test.ts"],
//   verbose: true,
//   forceExit: false,
// };