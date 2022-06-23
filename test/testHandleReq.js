const assert = require('assert');
const { handleRequest } = require('../src/handleRequest.js');

const responseMocker = () => ({
  received: '',
  send: function (data) { this.received = data; }
});

describe('handleRequest', () => {
  it( 'Should handle a default uri, write html page', () => {
    const response = responseMocker();
    handleRequest({uri: '/black'}, response);
    const expected = '<div class="page-wrapper" ' + 'style="background-color:black;display: flex; ' +
    'justify-content: center; align-items: center;height: 100%;' +
      '"><div class="box" style="height:300px;aspect-ratio:1;' + 'background-color:black"></div></div>';
    
    assert.equal(response.received, expected);
  });

  it( 'Should handle a requested uri, write html page', () => {
    const response = responseMocker();
    handleRequest({uri: '/red'}, response);
    const expected = '<div class="page-wrapper" ' + 'style="background-color:black;display: flex; ' +
    'justify-content: center; align-items: center;height: 100%;' +
      '"><div class="box" style="height:300px;aspect-ratio:1;' + 'background-color:red"></div></div>';
    
    assert.equal(response.received, expected);
  });
});
