module.exports = {
  env: {
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: "./tsconfig.json",
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "import/prefer-default-export": 0
  },
};
