const assert = require('assert');
const { Response } = require('../src/response.js');

const socketMock = () => ({
  writtenContent: '',
  ended: false,
  write: function (content) { this.writtenContent += content; },
  end: function () { this.ended = true; }
});

describe('Response', () => {
  it('Should add a header, add statusCode and send response', () => {
    const mockedSocket = socketMock();
    
    const response = new Response(mockedSocket);
    
    response.addHeader('header', 'header value');
    response.statusCode = 400;
    response.send('body content');
    const actual = mockedSocket.writtenContent;
   
    const expected = 'HTTP/2 400\r\nheader:header value\r\n\r\nbody content';
    assert.deepStrictEqual(actual, expected);
  });
});

