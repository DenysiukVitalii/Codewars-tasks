// function removeZeros(arr) {
//   var arrIndex = [];
//   for (var i = 0; i < arr.length; i++) if (arr[i] == 0 || arr[i] == "0") arrIndex.push(i);
//   for (var i = 0; i < arrIndex.length; i++) arr.splice(arrIndex[i] - i, 1);
//   for (var i = 0; i < arrIndex.length; i++) arr.push(0);
//   return arr;
// }


function removeZeros(arr) {
 function isZero(i) {
  var count = 0, isafe = i;
    for (i;i < arr.length; i++) if(arr[i] === 0 || arr[i] === "0") count++;
    if (count == (arr.length - isafe)) return 1;
  }
 for (var m = 0; m < arr.length; m++) {
   for (var i = 0; i < arr.length; i++) {
     if (isZero(i) == 1) break;
     if (arr[i] === 0) {
     for (var k = i; k < arr.length; k++) arr[k] = arr[k + 1];
       arr[arr.length - 1] = 0;
     } else
     if (arr[i] === "0") {
     for (var k = i; k < arr.length; k++) arr[k] = arr[k + 1];
       arr[arr.length - 1] = "0";
     }
   }
 }
 return arr;
}
console.log(removeZeros([1,2,52,7,"3",1,"0",0,"0",0]));
