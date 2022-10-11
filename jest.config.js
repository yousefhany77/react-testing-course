const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.jest.json",
    },
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }],
    },
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
