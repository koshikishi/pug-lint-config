'use strict';

const {defineConfig} = require('eslint/config');
const config = require('@koshikishi/eslint-config/node');

module.exports = defineConfig([
  {
    extends: [config],
    rules: {
      'strict': ['error', 'global'],
      'unicorn/prefer-module': 'off',
    },
  },
]);
