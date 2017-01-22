var array = [1,2,3,4,5,6];
/*
Array.prototype.except = function (keys) {

  if(!isFinite(keys)) {
      keys.sort((a,b) => a - b).forEach((k, i) => { arr.splice(k - i, 1);});
  }
  else arr.splice(keys, 1);
  return arr;
}
*/
Array.prototype.except = function (arr) {
  var myArray = this.map((i) => i);
  (isFinite(arr)) ? myArray.splice(arr, 1) : arr.sort((a,b) => a - b).map((el, i) => {if (i != 0) el -= 1; myArray.splice(el, 1);});
  return myArray;
}

console.log(array.except([1,3]));
console.log(array);
