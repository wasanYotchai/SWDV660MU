var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('Welcome to my Week 2 Custom App! by Wasan\n')
}).listen(3333, "0.0.0.0")  // Bind to all network interfaces

console.log('Server running on port 3333')
