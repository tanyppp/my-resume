module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  globals: {
    mode: true,
    $: true
  },
  plugins: [
    "flowtype"
  ],
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended"
  ],
  rules: {
    'no-console': 0,
    'no-useless-escape': 0,
    'no-empty': 0
  }
}
