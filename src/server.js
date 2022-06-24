const { createServer } = require('net');
const { handleDynamicRequest } = require('./handleDynamicRequest.js');
const { handleFileRequest } = require('./handleFileServes.js');
const { parseRequest } = require('./parseRequest.js');
const { Response } = require('./response.js');

const onRequest = (socket, handle, contentDir) => {
  socket.on('data', (clientRequest) => {
    const request = parseRequest(clientRequest.toString());
    console.log(request.method, request.uri);
    const response = new Response(socket);
    handle(request, response, contentDir);
  });
};

const handleError = ({ uri }, response) => {
  response.statusCode = 404;
  response.send(`${uri} PATH NOT FOUND`);
  return true;
};

const handle = (handlers) => {
  return (request, response, contentDir) => {
    for (const handler of handlers) {
      if (handler(request, response, contentDir)) {
        return true;
      }
    }
  };
};

const onStart = () => console.log(`started server on port ${PORT}`);
const startServer = (port, handler, contentDir) => {
  const server = createServer(socket => onRequest(socket, handler, contentDir));
  server.listen(port, onStart);
};

const PORT = 80;
const handlers = [handleFileRequest, handleDynamicRequest, handleError];
startServer(PORT, handle(handlers), process.argv[2]);

module.exports = { onRequest };
