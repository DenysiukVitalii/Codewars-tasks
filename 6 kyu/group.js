'use strict';
function group(arr) {
  let map = new Map();
  let result = [];

  arr.forEach((i) => {
    if (!map.get(i)) map.set(i, arr.indexOf(i));
  });

  arr.forEach((i) => {
    let index = map.get(i);
    if (!result[index]) result[index] = [];
    result[index].push(i);
  });

  return result.filter(i => i);
}

console.log(group([3, 2, 6, 2, 1, 3]));
