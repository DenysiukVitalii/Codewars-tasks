'use strict';

function counterEffect(hitCount) {
  let arrDigits = hitCount.split('');
  let result = [];
  for (let i = 0; i < arrDigits.length; i++) {
    let temp = [];
    for (let j = 0; j <= arrDigits[i]; j++) {
      temp.push(j);
    }
    result.push(temp);
  }
  return result;
}

console.log(counterEffect("1250"));
