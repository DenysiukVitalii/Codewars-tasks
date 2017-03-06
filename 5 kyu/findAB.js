'use strict';
function findAB(numbers,c){
 if(!c) return [numbers[0],0];
 for (let i = 0; i < numbers.length; i++) {
   let find = c / numbers[i];
   if (find != find | 0) continue;
   if (~numbers.indexOf(find, i + 1)) return [numbers[i], find];
 }
 return null;
}

console.log(findAB([1,2,3,4,5,6],6));
