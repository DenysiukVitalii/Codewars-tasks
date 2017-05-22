function removeUrlAnchor(url){
  var arr = url.split('');
  var posAnchor;
  arr.forEach((e, i) => {
    if (e == '#') posAnchor = i;
  });
  return url.slice(0, posAnchor);
}

//best practices
const removeUrlAnchor = url => url.split('#')[0];
const removeUrlAnchor = url => url.replace(/#.+/g, '');

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1'
removeUrlAnchor('www.codewars.com?page=1')
