var https = require("https");
var getHtml = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(html) {
  console.log(html);
}

getHtml(requestOptions, printHTML)