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

// best practices

function counterEffect(hitCount) {
  return hitCount.split('')
    .map(i => parseInt(i))
    .map(j => Array.from(Array(j+1), (_, i) => i));
}

function counterEffect(hitCount) {
  return [...hitCount].map( d => Array.from({length:+d+1}, (_,i) => i) )
}

console.log(counterEffect("1250"));
