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
console.log(unflatten([ 1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3 ]));
