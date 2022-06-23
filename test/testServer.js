const { onRequest } = require('../src/server.js');
// const { EventEmitter } = require('events');
const assert = require('assert');

describe('server: onRequest', () => {
  it('Should add a data event on socket', (done) => {
    const socket = {
      onEvent: '',
      cb: () => {},
      on: function (event, cb) {
        this.onEvent = event;
        this.cb = cb;
      }
    };

    const expectedReq = {
      method: 'GET',
      uri: '/',
      protocol: 'HTTP/2',
      headers: {
        host: 'localhost:1234',
        'user-agent': 'some agent',
        accept: '*/*'
      }
    };
  
    const handler = (request) => {
      assert.deepEqual(request, expectedReq);
      done();
    };
    
    onRequest(socket, handler);
    assert.equal(socket.onEvent, 'data');

    const request = 'GET / HTTP/2\r\nHost:localhost:1234\r\nUser-Agent:some agent\r\naccept:*/*';
    socket.cb(request);
  });
});
