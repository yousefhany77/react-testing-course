module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "plugin:@next/next/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:jest/style",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
