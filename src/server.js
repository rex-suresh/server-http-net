const { createServer } = require('net');
const { handleRequest } = require('./handleRequest.js');
const { parseRequest } = require('./parseRequest.js');
const { Response } = require('./response.js');

const onRequest = (socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (clientRequest) => {
    const request = parseRequest(clientRequest);
    const response = new Response(socket);
    handleRequest(request, response);
    socket.end();
  });
};

const PORT = 80;
const server = createServer(onRequest);
server.listen(PORT, () => console.log(`started server on port ${PORT}`));
