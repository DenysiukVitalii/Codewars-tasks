'use strict';
function alternteCase(str) {
  return str.split('').map(i => i.charCodeAt(0) >= 97 ? i.toUpperCase():i.toLowerCase()).join('');
}


console.log(alternteCase("Hello World"));
