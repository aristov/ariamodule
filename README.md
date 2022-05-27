# ariamodule

[![NPM Version](https://img.shields.io/npm/v/ariamodule.svg)](https://www.npmjs.com/package/ariamodule)
[![Node.js CI](https://github.com/aristov/ariamodule/actions/workflows/node.js.yml/badge.svg)](https://github.com/aristov/ariamodule/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/aristov/ariamodule/badge.svg?branch=master)](https://coveralls.io/github/aristov/ariamodule?branch=master)
[![NPM](https://img.shields.io/npm/l/ariamodule)](https://raw.githubusercontent.com/aristov/ariamodule/master/LICENSE)

AriaModule is a library for creating an accessible UI based on WAI-ARIA.
This is an extension for [htmlmodule](https://npmjs.com/package/htmlmodule) 
which also re-exports all the content from it.

## Installation

The easiest way to get AriaModule is to include pre-built bundle from CDN.
Since AriaModule is built on top of HtmlModule, you should also enable it:

```html
<script src="https://unpkg.com/htmlmodule@latest/dist/htmlmodule.js"></script>
<script src="https://unpkg.com/ariamodule@latest/dist/ariamodule.js"></script>
```

It injects `htmlmodule` and `ariamodule` globals into your environment.

### NPM

If you're using NPM, you can install AriaModule via:

```shell
npm install ariamodule
```

## Usage

Pre-built bundle

```js
const { RoleButton } = ariamodule
```

In CommonJS

```js
const { RoleButton } = require('ariamodule')
```

In ES2015

```js
import { RoleButton } from 'ariamodule'
```

The HtmlModule stuff can also be imported from AriaModule:

```js
import { HtmlA } from 'ariamodule'
```

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/ariamodule/master/LICENSE)

