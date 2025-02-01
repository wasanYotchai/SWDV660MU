var http = require("http");

http.createServer(function (request, response) {
    // Send the HTTP header
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body
    response.end('Welcome to my Week 3 Custom App! by Wasan\n');
}).listen(3333, "0.0.0.0");  // Bind to all network interfaces

// Console will print the message
console.log('Server running on http://0.0.0.0:3333');
