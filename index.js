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
    source: ['type'],
  }, {
    img: ['src', 'alt', 'width', 'height'],
  }, {
    form: ['action'],
  }, {
    input: ['name'],
  }, {
    button: ['type'],
  }, {
    select: ['name'],
  }, {
    textarea: ['name'],
  }, {
    svg: ['width', 'height'],
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
