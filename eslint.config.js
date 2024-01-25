'use strict';

const config = require('@koshikishi/eslint-config/node');
const globals = require('globals');

module.exports = [
  ...config,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
];
