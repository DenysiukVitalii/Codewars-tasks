'use strict';

function missingNumber(arr){
  let n = arr.length + 1,
      sum = 0,
      expectedSum = n * (n + 1) / 2;

  sum = arr.reduce((a, b) => a + b);

  return expectedSum - sum;
}

console.log(missingNumber([5, 2, 6, 1, 3])); // 4
