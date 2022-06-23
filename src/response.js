class Response {
  #socket; #statusCode;
  constructor(socket) {
    this.#socket = socket;
    this.#statusCode = 200;
  }

  write(data) {
    this.#socket.write(data);
  }

  send(body) {
    const responseData = `HTTP/2 ${this.#statusCode}\r\n\r\n${body}`;
    this.#socket.write(responseData);
    this.#socket.end();
  }
}

module.exports = { Response };
