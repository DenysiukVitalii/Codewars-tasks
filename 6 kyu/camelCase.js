'use strict';
String.prototype.camelCase = function () {
  return this.toString().split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
}

console.log("sad sdsd".camelCase());
