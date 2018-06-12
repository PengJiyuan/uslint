# uslint
Unitedstack eslint rules wrapper.

## Plugins and parsers

* babel-eslint
* eslint-config-airbnb
* eslint-plugin-react
* eslint-plugin-babel
* eslint-plugin-import
* eslint-plugin-a11y

## Install

```bash
npm i uslint -D
# or
npm i uslint -g
```

## Usage

```
Usage: uslint [files] [options]

  -h, --help   displays help
  -f, --fix    Automatically fix problems
  --errorOnly  Only show error, filter out warnings

Version: x.x.x
```

eg.

```bash
uslint src/ client/
```

**Zero-config!**

## Options

#### -f, --fix

Automatically fix problems. The same as `eslint --fix`.

#### --errorOnly

Only show error, filter out warnings. The same as `eslint --quiet`.

## LICENSE

[MIT](./LICENSE) © PengJiyuan
