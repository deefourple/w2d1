var https = require("https");
var getHtml = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUppercase(html) {
  var upper = html.toUpperCase();
  console.log(upper);
}

getHtml(requestOptions, printUppercase)