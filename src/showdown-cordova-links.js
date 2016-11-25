/**
 * Cordova Links extension
 * Converts normal urls into urls that will open extenal to the application
 * Usage:
 * [my link][http://example.com]
 *
 */
(function (extension) {
  'use strict';

  if (typeof showdown !== 'undefined') {
    // global (browser or nodejs global)
    extension(showdown);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['showdown'], extension);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = extension(require('showdown'));
  } else {
    // showdown was not found so we throw
    throw Error('Could not find showdown library');
  }

}(function (showdown) {

  'use strict';

  showdown.extension('cordova-links', function () {
    return [
      {
        type: 'output',
        regex: /href="([^\'\"]+)/g,
        replace: 'href="window.open(\'$1\', \'_system\')',
      },
    ];
  });
}));
