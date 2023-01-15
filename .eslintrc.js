module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parser: "babel-eslint", // added this to removed unexpected token parser error messages
  parserOptions: {
    ecmaVersion: 12,
  },
  // rules: {
  //   indent: ["error", 4],
  //   quotes: ["error", "single"],
  //   semi: ["error", "always"],
  // },
};
