'use strict';

function foldArray(array, runs) {
 let arr = array.map(i => i);
 let fpart = [];
 let lpart = [];
 for (let i = 0; i < runs; i++) {
 if (arr.length % 2 == 0) {
   lpart = arr.slice(arr.length / 2).reverse();
   fpart = arr.slice(0, arr.length / 2);
   for (let i = 0; i < fpart.length; i++)
     fpart[i] += lpart[i];
   arr = fpart;
 } else {
   lpart = arr.slice(arr.length / 2 + 1).reverse();
   fpart = arr.slice(0, arr.length / 2 + 1);
   for (let i = 0; i < lpart.length; i++) {
        fpart[i] += lpart[i];
        arr.pop();
  }
  for (let i = 0; i < fpart.length; i++)
   arr[i] = fpart[i];
 }
}
return arr;
}

console.log(foldArray([1,2,3,4,5], 1));
