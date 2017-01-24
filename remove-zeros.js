function removeZeros(arr) {
  var arrIndex = [];
  for (var i = 0; i < arr.length; i++) if (arr[i] == 0 || arr[i] == "0") arrIndex.push(i);
  for (var i = 0; i < arrIndex.length; i++) arr.splice(arrIndex[i] - i, 1);
  for (var i = 0; i < arrIndex.length; i++) arr.push(0);
  return arr;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
