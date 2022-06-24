const handleRequest = (__, socket) => {
  const responses = [
    'HEY HELLO', 'DO i KNOW YOU', 'GET LOST', 'BYE BYE', 'STUPID', 'MONKEY'
  ];
  const randomResponse = responses[
    Math.floor(responses.length * Math.random())];
  socket.write(randomResponse);
};

module.exports = { handleRequest };
