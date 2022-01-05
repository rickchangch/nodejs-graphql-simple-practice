var http = require('http');

const PORT = 8080;

// Create a server object
var httpServer = http.createServer(function (req, resp) {
  // Write a response to the client
  resp.write('GeeksForGeeks');

  // Getting the reference of the underlying socket object by using socket API
  const value = resp.socket;

  // Display result
  resp.end("socket buffersize : " + value.writableLength, 'utf8', () => {
    console.log("Displaying the result...");
  });
});

// The server object listens on port 8080
httpServer.listen(PORT);
