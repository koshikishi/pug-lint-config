'use strict';

module.exports = {
  disallowDuplicateAttributes: true,
  disallowLegacyMixinCall: true,
  disallowMultipleLineBreaks: true,
  disallowSpacesInsideAttributeBrackets: true,
  disallowSpecificTags: ['style'],
  requireClassLiteralsBeforeAttributes: true,
  requireClassLiteralsBeforeIdLiterals: true,
  requireIdLiteralsBeforeAttributes: true,
  requireLowerCaseAttributes: true,
  requireLowerCaseTags: true,
  requireSpaceAfterCodeOperator: true,
  requireSpecificAttributes: [{
    a: ['href'],
  }, {
    time: ['datetime'],
  }, {
    img: ['src', 'alt', 'width', 'height'],
  }, {
    video: ['width', 'height'],
  }, {
    iframe: ['width', 'height'],
  }, {
    source: ['type'],
  }, {
    svg: ['width', 'height'],
  }, {
    form: ['action', 'method'],
  }, {
    button: ['type'],
  }, {
    input: ['name'],
  }, {
    select: ['name'],
  }, {
    textarea: ['name'],
  }],
  requireStrictEqualityOperators: true,
  validateAttributeQuoteMarks: '"',
  validateAttributeSeparator: {
    separator: ' ',
    multiLineSeparator: '\n  ',
  },
  validateSelfClosingTags: true,
  validateTemplateString: true,
};
