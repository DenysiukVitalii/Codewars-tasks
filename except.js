Array.prototype.except = function (arr) {
  var myArray = [];
  for (var key in this) myArray[key] = this[key];
  (isFinite(arr)) ? myArray.splice(arr, 1) : arr.sort((a,b) => a - b).map((el, i) => {if (i != 0) el -= 1; myArray.splice(el, 1);});
  return myArray;
}

var array = [1,2,3,4,5,6];

console.log(array.except([6,3]));
console.log(array);
