'use strict';

module.exports = {
  disallowBlockExpansion: true,
  disallowClassAttributeWithStaticValue: true,
  disallowDuplicateAttributes: true,
  disallowHtmlText: true,
  disallowIdAttributeWithStaticValue: true,
  disallowLegacyMixinCall: true,
  disallowMultipleLineBreaks: true,
  disallowSpacesInsideAttributeBrackets: true,
  disallowSpecificTags: ['style'],
  disallowTrailingSpaces: true,
  requireClassLiteralsBeforeAttributes: true,
  requireClassLiteralsBeforeIdLiterals: true,
  requireIdLiteralsBeforeAttributes: true,
  requireLineFeedAtFileEnd: true,
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
  validateExtensions: true,
  validateIndentation: 2,
  validateSelfClosingTags: true,
  validateTemplateString: true,
};
