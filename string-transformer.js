function stringTransformer(str) {
  str = str.split(' ').reverse();
  var isUpperCase = function(symbol) { return (!!symbol.toUpperCase()==symbol);}
  var words = str.map((word) => {return word.split('').map((item) => {
    return ((item.toUpperCase()==item)) ? item.toLowerCase() : item.toUpperCase();
  }).join('')}).join(' ');
  return words;
}
console.log(stringTransformer('Example string'));
//stringTransformer('Example string'), 'STRING eXAMPLE'
