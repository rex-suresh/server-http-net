const { createServer } = require('net');
const { handleRequest } = require('./handleRequest.js');
const { parseRequest } = require('./parseRequest.js');
const { Response } = require('./response.js');

const onRequest = (socket, handler) => {
  socket.on('data', (clientRequest) => {
    const request = parseRequest(clientRequest.toString());
    const response = new Response(socket);
    handler(request, response);
  });
};

const PORT = 80;
const server =
  createServer(socket => onRequest(socket, handleRequest));

server.listen(PORT,
  () => console.log(`started server on port ${PORT}`));

module.exports = { onRequest };
