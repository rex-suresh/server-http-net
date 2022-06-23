const assert = require('assert');
const { parseRequest, parseHeaders, parseRequestLine, separateHeaderFields } =
  require('../src/parseRequest.js');

describe('parseRequest', () => {
  it('Should parse the request provided and return a object of request-Line, headers', () => {
    const request = 'GET / HTTP/2\r\nHost:localhost:1234\r\nUser-Agent:some agent\r\naccept:*/*';
    const actual = parseRequest(request);
    const expected = {
      method: 'GET',
      uri: '/',
      protocol: 'HTTP/2',
      headers: {
        host: 'localhost:1234',
        'user-agent': 'some agent',
        accept: '*/*'
      }
    };
    assert.deepStrictEqual(actual, expected);
  });
});

describe( 'parseHeaders', () => {
  it('Should parse headers as objects', () => {
    const headers = ['Header1:h1', 'Header2:h2, h2', 'Header3:h3: h3 '];
    const actual = parseHeaders(headers);
    const expected = {
      header1: 'h1',
      header2: 'h2, h2',
      header3: 'h3: h3',
    };
    assert.deepStrictEqual(actual, expected);
  });
});

describe( 'parseRequestLine', () => {
  it('Should parse the requestLine', () => {
    const reqLine = 'GET / HTTP/2';
    const actual = parseRequestLine(reqLine);
    const expected = {method: 'GET', uri: '/', protocol: 'HTTP/2'};
    assert.deepStrictEqual(actual, expected);
  });
});

describe( 'separateHeaderFields', () => {
  it('Should separate header fields', () => {
    const headerLine = 'Header:h';
    const actual = separateHeaderFields(headerLine);
    const expected = ['header', 'h'];
    assert.deepStrictEqual(actual, expected);
  });
});
