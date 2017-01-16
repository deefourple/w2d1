let https = require("https");

function getAndPrintHTMLChunks () {

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){
    response.setEncoding('utf-8');

    response.on('data', function(data){
      console.log("Chunk: ", data);
    });

    response.on('end', function() {
      console.log("ended GET request");
    });
  });

}

getAndPrintHTMLChunks()