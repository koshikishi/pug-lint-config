# @koshikishi/pug-lint-config

[![NPM Version][npm-image]][npm-url]
[![GitHub License][license-image]][license-url]
[![Check Workflow Status][workflow-image]][workflow-url]

The pug-lint shareable config designed for my personal projects.

Use it as is or as a foundation for your own configuration file.

## Installation

Install the package and `pug-lint` in your project:

```sh
npm i -D pug-lint @koshikishi/pug-lint-config
```

## Usage

Set your `pug-lint` config to:

```json
{
  "extends": "@koshikishi/pug-lint-config"
}
```

### Extending the config

You can specify additional rules and override or turn off already set ones.

For example, to change the `validateIndentation` rule to specify a different indentation, turn off the `requireStrictEqualityOperators` rule and add the `validateDivTags` rule:

```json
{
  "extends": "@koshikishi/pug-lint-config",
  "requireStrictEqualityOperators": null,
  "validateDivTags": true,
  "validateIndentation": 4
}
```

## Integration with VS Code

1. Install the pug-lint [extension](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-puglint) for VS Code.
2. Enable the linter in VS Code [settings](https://code.visualstudio.com/docs/getstarted/settings).
3. Install `pug-lint` and this config in your project following the [Installation](#installation) section.
4. Add a pug-lint configuration file (`.pug-lintrc.*`) and extend it with this shareable config following the [Usage](#usage) section.

## Useful links

- [Changelog](CHANGELOG.md)
- [Pug-lint documentation](https://github.com/pugjs/pug-lint#readme)

[npm-image]: https://img.shields.io/npm/v/@koshikishi/pug-lint-config
[npm-url]: https://www.npmjs.com/package/@koshikishi/pug-lint-config
[license-image]: https://img.shields.io/github/license/koshikishi/pug-lint-config
[license-url]: https://github.com/koshikishi/pug-lint-config/blob/main/LICENSE
[workflow-image]: https://github.com/koshikishi/pug-lint-config/actions/workflows/check.yml/badge.svg
[workflow-url]: https://github.com/koshikishi/pug-lint-config/actions
