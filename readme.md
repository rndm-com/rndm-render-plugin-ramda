# RNDM Render Plugin: Lodash

## About

This plugin provides the core functionality for the [RNDM Render package](https://github.com/rndm-com/rndm-render).

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-ramda
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-ramda';
```

## Usage

The Ramda Plugin transforms the ramda methods into serialisable functions.

**Example**

```javascript
{
    type: 'R.add',
    isFunc: true,
    args: [
        123,
        456,
    ],
};

// This will give the result 579

```

For the full suite of available ramda methods, [please checkout their awesome and powerful utility library](https://ramdajs.com/docs/).

_(Note: This library is versioned alongside its corresponding ramda version.)_
