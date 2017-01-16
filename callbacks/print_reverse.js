var https = require("https");
var getHtml = require("../http-functions");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function reverseString(html) {
  var newStr = "";

  for (var i = html.length - 1; i >= 0; i--) {       //starting from the end of the html
    newStr += html[i];
  }
  console.log(newStr);
}

getHtml(requestOptions, reverseString)