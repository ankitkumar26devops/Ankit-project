// app.js

// Import the built-in 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the HTTP status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n'); // Send the response
});

// Start the server and listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});

