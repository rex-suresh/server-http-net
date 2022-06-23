const { tagOf } = require('../domToHtml');

// const _handleRequest = (request, socket) => {
//   const responses = [
//     'HEY HELLO', 'DO i KNOW YOU', 'GET LOST', 'BYE BYE', 'STUPID', 'MONKEY'
//   ];
//   const randomResponse = responses[
//     Math.floor(responses.length * Math.random())];
//   socket.write(randomResponse);
// };

const DOM = ['div',
  {
    class: 'page-wrapper',
    style:
      'background-color:black;' + 
      'display: flex; justify-content: center; align-items: center;' + 
      'height: 100%;'
  }
];

const getBox = (color) => [
  'div', {
    class: 'box',
    style: `height:300px;aspect-ratio:1;background-color:${color}`
  }, '']
;

const handleRequest = ({ uri = '/black' }, response) => {
  const box = getBox(uri.slice(1));
  const page = tagOf(...DOM, box);
  response.send(page);
};

module.exports = { handleRequest };
