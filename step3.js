//function accepts a paramater, options, which is an object that contains values for the host and path, exactly like requestOptions. Reuse whatever code you need from part 2 - we're still getting and printing the HTML.
var https = require("https");

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHtml(options) {

  https.get(options, function(response){
    response.setEncoding('utf-8');

  response.on('data', function(data){
    console.log("Chunk: ", data, "\n");
    });

  response.on('end', function() {
    console.log("ended GET request");
  });
  });

}

getAndPrintHtml(options)
