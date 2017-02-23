"use strict";
function unflatten (flatArray) {
  var unflattenArray = [];
  for (let i = 0; i < flatArray.length; i++) {
    let item = flatArray[i];
    if (item < 3) unflattenArray.push(item);
    if (item > 2) {
      unflattenArray.push( flatArray.slice(i, i + item) );
      i += item - 1;
    }
  }
  return unflattenArray;
}

const unflatten=a=>a.length?[(x=a.shift())<3?x:[x,...a.splice(0,x-1)],...unflatten(a)]:[]

console.log(unflatten([ 1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3 ]));
