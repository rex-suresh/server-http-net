const fs = require('fs');

const handleFileRequest = (path, { uri }, response) => {
  const fileName = `${path}${uri}`;
  if (fs.existsSync(fileName)) {
    const body = fs.readFileSync(fileName);
    response.send(body);  
    return true;
  }
  return false;
};

module.exports = { handleFileRequest };
