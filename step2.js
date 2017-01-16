var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf-8');

    response.on('data', function(data){
      console.log("chunk: ", data, "\n");
    });

    response.on('end', function() {
      console.log("END");
    });
  });

}

getAndPrintHTML()