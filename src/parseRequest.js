const parseRequestLine = (requestLine) => { 
  const [method, uri, protocol] = requestLine.split(' ');
  return { method, uri, protocol };
};

const separateHeaderFields = (headerLine) => {
  const splitIndex = headerLine.indexOf(':');
  const name = headerLine.slice(0, splitIndex).trim();
  const value = headerLine.slice(splitIndex + 1).trim();
  return [name.toLowerCase(), value];
};

const parseHeaders = (lines) => {
  const headers = {};
  let index = 0;
  while (lines[index]) {
    const [name, value] = separateHeaderFields(lines[index]);
    headers[name] = value;
    index++;
  }
  return headers;
};

const parseRequest = (request) => { 
  const [reqLine, ...lines] = request.split('\r\n');
  const requestLine = parseRequestLine(reqLine);
  const headers = parseHeaders(lines);
  return { ...requestLine, headers };
};

module.exports = {
  parseRequest, parseRequestLine, parseHeaders, separateHeaderFields
};
