# permissions-plugin-loop

[![Build Status](https://travis-ci.org/Cowa-Bunga/permissions-plugin-loop.svg?branch=master)](https://travis-ci.org/Cowa-Bunga/permissions-plugin-loop)
[![npm version](https://badge.fury.io/js/permissions-plugin-loop.svg)](https://badge.fury.io/js/permissions-plugin-loop)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Permissions for Loop node projects

## Usage

Install:

```sh
npm i permissions-plugin-loop -D
```

At a glance:

```js
import loopPermit from 'permissions-plugin-loop'
router.post('/create', auth, loopPermit("order:create"), createOrder)
```
## Changelog

See the GitHub [release history](https://github.com/Cowa-Bunga/permissions-plugin-loop/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
