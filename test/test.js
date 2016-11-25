var fs = require('fs');
var showdown = require('showdown');

require('chai').should();
require('../src/showdown-cordova-links');

var converter = new showdown.Converter({ extensions: ['cordova-links'] });

///////////////
// Assertion //
///////////////
var input = fs.readFileSync('test/cases/url.md', 'utf8');
var expected = fs.readFileSync('test/cases/url.html', 'utf8');
var output = null;

describe('Showdown cordova links extension', function () {
  it('converts urls into cordova friendly urls', function () {
    output = converter.makeHtml(input);

    normalize(output).should.equal(normalize(expected));
  });
});

/////////////
// Helpers //
/////////////
//Normalize input/output - huge thank you to the writers of the showdown youtube
//extension for this code snippet
function normalize(value) {

  // Normalize line returns
  value = value.replace(/\r/g, '');

  // Ignore all leading/trailing whitespace
  value = value.split('\n').map(function (x) {
    return x.trim();
  }).join('\n');

  // Remove extra lines
  value = value.trim();

  // Convert whitespace to a visible character so that it shows up on error reports
  value = value.replace(/ /g, '·');
  value = value.replace(/\n/g, '•\n');

  return value;

}
