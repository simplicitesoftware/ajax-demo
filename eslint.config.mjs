import js from '@eslint/js';
import globals from 'globals';
import html from 'eslint-plugin-html';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        '__dirname': true
      }
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-multi-spaces': 'error',
      'no-trailing-spaces': [ 'error', { skipBlankLines: false } ],
      'no-console': 'off',
      'no-debugger': 'error'
    }
  },
  {
    files: [ '**/*.html' ],
    plugins: { html }
  }
];
