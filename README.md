Showdown.js Cordova Links Extension
===================================

## Introduction

This extension converts creates links that may be opened by the system browser on
cordova applications.  It does this by replacing any showdown.js generated links
with an onclick handler that calls the system browser.


## Installation

`npm install showdown-cordova-links`


## Including the extension

Simply include the extension in your page. On es6 applications (eg. Ionic), simply
add to the top of a script:

`import 'showdown-cordova-links'`


## Enabling the extension

### With normal showdown.js

Reference the extension when initalizing showdown

```javascript
var converter = new showdown.Converter({ extensions: ['cordova-links'] });
```

### With [angular-markdown-filter](https://github.com/vpegado/angular-markdown-filter)

IF you are using the angular markdown filter extension you may initialise an
extension via a config provider:

```javascript
angular.module('markdown')
  .config(function(markdownProvider) {
    markdownProvider.config({
      extensions: ['cordova-links']
    });
  });
```
