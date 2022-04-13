/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    'plugin:vue/base',
    'plugin:vue/recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    quotes: ['error', 'single'], // Prefer single quotes where possible
    'indent': ['error', 2], // Enforce indentation to 2 space-tabs
    'vue/html-self-closing': ['error'], // Prefer self-closing tags
    'comma-dangle': ['error', 'always-multiline'], // Always put a comma at the end of a multiline
  },
};
