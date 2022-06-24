const { tagOf } = require('../domToHtml.js');

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
  }, ''];

const handleDynamicRequest = ({ uri }, response) => {
  const colors = ['red', 'green', 'blue', 'pink', 'white'];
  const color = uri.slice(1);

  if (colors.includes(color.toLowerCase())) {
    const box = getBox(color);
    const page = tagOf(...DOM, box);
    response.send(page);
    return true;
  }
  
  return false;
};

module.exports = { handleDynamicRequest };
