'use strict';

function inArray(arr1, arr2){
    for (let i = 0; i < arr1.length; i++) {
      let count = 0;
      for (let j = 0; j < arr2.length; j++) {
        if (~arr2[j].indexOf(arr1[i])) count++;
      }
      if (count == 0) arr1.shift();
    }
    return arr1;
}

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2));
