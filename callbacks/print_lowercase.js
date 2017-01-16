var https = require("https");
var getHtml = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowercase(html) {
  var upper = html.toLowerCase();
  console.log(upper);
}

getHtml(requestOptions, printLowercase)