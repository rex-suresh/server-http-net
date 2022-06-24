const fs = require('fs');

const handleFileRequest = ({ uri }, response, path) => {
  const fileName = `${path}${uri}`;
  if (fs.existsSync(fileName)) {
    const body = fs.readFileSync(fileName);
    response.send(body);  
    return true;
  }
  return false;
};

module.exports = { handleFileRequest };
