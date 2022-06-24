const fs = require('fs');

const handleRequest = ({ uri = '/anime' }, response) => {
  const fileName = `./public${uri}`;
  if (fs.existsSync(fileName)) {
    const body = fs.readFileSync(fileName);
    response.send(body);  
  }
};

module.exports = { handleRequest };
