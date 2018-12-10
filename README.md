[![npm version](https://badge.fury.io/js/filament-rnvidatec.svg)](https://badge.fury.io/js/filament-rnvidatec)
[![npm downloads](https://img.shields.io/npm/dt/filament-rnvidatec.svg)](https://www.npmjs.com/package/filament-rnvidatec)
![](https://img.shields.io/github/issues-raw/vidatec/filament-rnvidatec.svg)
![](https://img.shields.io/github/last-commit/vidatec/filament-rnvidatec.svg)
![](https://img.shields.io/github/languages/top/vidatec/filament-rnvidatec.svg)
![](https://img.shields.io/npm/l/filament-rnvidatec.svg)

# filament-rnvidatec
Filament package for `react-native-template-vidatec`

## Installation

```
npm i filament-rnvidatec --save-dev
```

Add the following code to your package.json

```
"config": {
    "filament": {
      "package": "filament-rnvidatec"
    }
  }
```

If using `react-native-template-vidatec` this is automatically set for you when you run `setup.js` after the template init.

## Usage

You can either install the Filament CLI globally (`npm i filament-cli -g`) or just use `npx` to call it.

```
npx filament new component {componentName}
npx filament new screen {screenName}
npx filament new redux {reduxName}
npx filament new network {networkControllerName}
```