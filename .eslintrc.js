module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  plugins: [
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', {singleQuote: true}]
  }
};
