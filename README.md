[![License MIT](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC) [![](https://ga-beacon.appspot.com/UA-82522402-2/readme?pixel)](https://github.com/igrigorik/ga-beacon)

## Overview

A better console logger. It has timestamps, colors and more.

Why use it?

- Written with Typescript! So types are included for safety and joy
- No configuration needed
- Timestamp includes milliseconds (for precise debugging)
- Just require the `log` function and you are good to go
- A nice "token" symbol at the beginning of each line (see #Usage)

Usecases

- NodeJS
- Module bundler for frontend projects like Webpack, Traceur, Babel

## Getting started

```sh
npm i iconsole-logger -S
```

## Usage

The simplest way to use the logger is using "Destructuring Assignment":

```javascript
const { log, error, success, print } = require('iconsole-logger');
```
or in ES6 style
```javascript
import { log, error, success, print } from 'iconsole-logger';
```


```javascript
log(`Log example`)
error(`Error example`)
success(`Success example`)
print(`Print example`)
```

Another way is to initialize a variable as an instance of the module, and then use it's methods

```javascript
const logger = require('iconsole-logger');

logger.log(`Log example`)
logger.error(`Error example`)
logger.success(`Success example`)
logger.print(`Print example`)
```

In both cases you should get output in terminal similar to this:

![Output example](https://gitlab.com/andrekosak/iconsole-logger/raw/master/docs/screen_1.png 'Output example')
