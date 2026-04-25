# iconsole-logger

[![npm version](https://img.shields.io/npm/v/iconsole-logger.svg)](https://www.npmjs.com/package/iconsole-logger)
[![license](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A small TypeScript-friendly console logger with timestamps, colored output, and readable object formatting.

## Features

- Zero configuration for the common logging cases.
- Timestamped messages with millisecond precision.
- Colored log levels powered by `chalk`.
- Full-depth object inspection for nested data.
- TypeScript declarations included in the published package.

## Installation

```sh
npm install iconsole-logger
```

## Usage

CommonJS:

```js
const { log, error, success, print, warn } = require('iconsole-logger');

log('Application started');
success('User created', { id: 42, role: 'admin' });
warn('Cache miss', { key: 'profile:42' });
error('Request failed', { statusCode: 500 });
print('Raw diagnostic message');
```

ES modules or TypeScript:

```ts
import { log, error, success, print, warn } from 'iconsole-logger';

log('Application started');
success('User created', { id: 42, role: 'admin' });
warn('Cache miss', { key: 'profile:42' });
error('Request failed', { statusCode: 500 });
print('Raw diagnostic message');
```

You can also import the package namespace:

```js
const logger = require('iconsole-logger');

logger.log('Application started');
logger.error('Request failed');
```

Example output:

![Output example](https://github.com/andrekosak/iconsole-logger/blob/master/docs/screen_1.png?raw=true 'Output example')

## API

Each logger function accepts any number of arguments, just like `console.log`.

| Function | Console target | Color | Token | Intended use |
| --- | --- | --- | --- | --- |
| `log(...args)` | `console.log` | white | `ℹ︎` | General information |
| `success(...args)` | `console.log` | green | `✓` | Successful operations |
| `warn(...args)` | `console.log` | magenta | `⚠︎` | Warnings and recoverable issues |
| `error(...args)` | `console.error` | red | `✘` | Errors and failed operations |
| `print(...args)` | `console.log` | gray | `▸` | Plain diagnostic output |

Output is formatted as:

```text
<token> [HH:mm:ss SSS] <message> <additional arguments>
```

Objects are formatted with `util.inspect` using unlimited depth, which makes nested data easier to read in terminal and CI logs.

## Development

Install dependencies:

```sh
npm ci
```

Build the TypeScript sources:

```sh
npm run build
```

Run the test suite:

```sh
npm test
```

Run the npm publish command locally as a dry run:

```sh
npm run publish:npm -- --dry-run
```

## Publishing

This package is published through GitHub Actions on release commits to `master`.

The publish workflow:

- installs dependencies with `npm ci`;
- builds and tests the package;
- checks whether the current package version already exists on npm;
- publishes with npm provenance enabled;
- creates a `v<version>` git tag after a successful publish.

The npm publish command is defined in `package.json`:

```sh
npm run publish:npm
```

## License

ISC
