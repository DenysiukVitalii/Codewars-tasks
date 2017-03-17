'use strict';
function array_diff(a, b) {
let arr = [];
a.forEach( (i) => { if (i != b[0]) arr.push(i)} );
return arr;
}


console.log(array_diff([1,2,2,2,3],[2]));
