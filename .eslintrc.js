module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    semi: ['error', 'never'],
    'require-jsdoc': ['off'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always', // グループ間に空白行が入る
        alphabetize: {
          order: 'asc', // アルファベットの昇順に並び替えられる
        },
      },
    ],
  },
}
