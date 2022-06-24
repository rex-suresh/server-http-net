const { createServer } = require('net');
const { handleRequest } = require('./handleDynamicRequest.js');
// const { handleFileRequest } = require('./handleFileServes.js');
const { parseRequest } = require('./parseRequest.js');
const { Response } = require('./response.js');

const onRequest = (socket, handler, contentDir) => {
  socket.on('data', (clientRequest) => {
    const request = parseRequest(clientRequest.toString());
    console.log(request.method, request.uri);
    const response = new Response(socket);
    handler(request, response, contentDir);
  });
};

const onStart = () => console.log(`started server on port ${PORT}`);
const startServer = (port, handler, contentDir) => {
  const server = createServer(socket => onRequest(socket, handler, contentDir));
  server.listen(port, onStart);
};

const PORT = 80;
startServer(PORT, handleRequest, process.argv[2]);

module.exports = { onRequest };
