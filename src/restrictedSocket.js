class LimSocket {
  #socket;
  constructor(socket) {
    this.#socket = socket;
  }
  
  write(response) {
    this.#socket.write(response);
  }
}

module.exports = { LimSocket };
