# uslint
Zero-config eslint, jsonlint, stylelint cli. All in one.

## Integrate

* [Eslint](https://github.com/eslint/eslint)
* [Jsonlint](https://github.com/zaach/jsonlint)
* [Stylelint](https://github.com/stylelint/stylelint)

## Install

```bash
npm i uslint -D
# or
npm i uslint -g
```

## Usage

```
Usage: uslint [files] [options]

  -h, --help          displays help
  -f, --fix           Automatically fix problems
  --errorOnly         Only show error, filter out warnings
  --jsonlint String   lint json files
  --stylelint String  lint style files (css, less)
  --styleVerbose      stylelint output formatter: verbose

Version: 0.5.0
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

#### --jsonlint [String]

lint json files.

```bash
# use eslint to lint folder src
# use jsonlint to lint 'jsons/**/*.json'
uslint src/ --jsonlint 'jsons/**/*.json'
```

#### --stylelint [String]

lint style files. (less)

```bash
# use eslint to lint folder src
# use jsonlint to lint 'jsons/**/*.json'
# use stylelint to lint 'client/**/*.less'
uslint src/ --jsonlint 'jsons/**/*.json' --stylelint 'client/**/*.less'
```

#### --styleVerbose

Stylelint output format `verbose`.

## Plugins and parsers

#### Eslint

* [babel-eslint](https://github.com/babel/babel-eslint)
* [eslint-config-airbnb](https://github.com/airbnb/javascript)
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
* [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

#### Stylelint

* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

## LICENSE

[MIT](./LICENSE) © PengJiyuan
