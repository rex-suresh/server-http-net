const createAttr = ([attribute, value]) => attribute + '=' + '"' + value + '"';

const attributesOf = (attributes) => {
  const createdAtt = [];
  for (const att in attributes) {
    createdAtt.push(createAttr([att, attributes[att]]));
  }
  return createdAtt.join(' ');
};

const tagOf = function (tag, attributes, ...content) {
  const newContent = content.map(
    subTag => Array.isArray(subTag) ? tagOf(...subTag) : subTag).join('');
  
  if (['img', 'link'].includes(tag)) {
    return '<' + tag + ' ' + attributesOf(attributes) + '/>';
  }

  return '<' + tag + ' ' + attributesOf(attributes) + '>' + newContent +
    '</' + tag + '>';
};

exports.tagOf = tagOf;
