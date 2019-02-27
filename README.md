# yaml-hook
require() hook to load .yml/.yaml YAML files as JS objects

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/yaml-hook.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/yaml-hook
[travis-image]: https://img.shields.io/travis/goto-bus-stop/yaml-hook.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/yaml-hook
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install
```
npm install yaml-hook
```

## Usage
This hook supports .yml and .yaml files. It uses [js-yaml](https://github.com/nodeca/js-yaml)'s `safeLoad` function, so YAML-native things are supported, and JS-specific regex/function types are not supported.

```js
var yamlHook = require('yaml-hook')

// install the hook
var hook = yamlHook()

// require() a yaml file
console.log(require('./somefile.yml'))

// uninstall the hook
hook.revert()

// can no longer require yaml files
// → throws
require('./otherfile.yaml')
```

To install the hook globally, you can do this at the entry point of your app:

```js
require('yaml-hook/register')
```

This also works with transpiled ES modules using Babel. Note that it does _not_ work with native ES modules, because yaml-hook uses the CommonJS hooking mechanism.
```js
import 'yaml-hook/register'
```

## License
[Apache-2.0](LICENSE.md)
