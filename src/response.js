class Response {
  #socket; #statusCode; #headers;
  constructor(socket) {
    this.#socket = socket;
    this.#statusCode = 200;
    this.#headers = {};
  }

  addResponse(key, value) {
    this.#headers[key] = value;
  }
  
  write(data) {
    this.#socket.write(data);
  }

  send(body) {
    const responseData = `HTTP/2 ${this.#statusCode}\r\n\r\n`;
    this.#socket.write(body);
    this.#socket.write(responseData);
    this.#socket.end();
  }
}

module.exports = { Response };
