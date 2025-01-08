// Create web server 
// Create a web server that listens on port 3000. When you visit http://localhost:3000, the server should return a response with a status code of 200 and a body with the text "Hello, world!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello, world!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});