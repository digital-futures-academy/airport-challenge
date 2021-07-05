module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
      'google',
      'eslint:recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
  },
    'rules': {
        "quotes": ["warn", "single"]
    }
};
