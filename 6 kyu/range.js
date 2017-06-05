'use strict';

const range = (...args) => {
  let start = args.length > 1 ? args[0] : 1;
  let step = args.length > 2 ? args[1] : 1;
  let stop = args[args.length - 1];
  const result = [];
  while (start <= stop) {
    result.push(start);
    start += step;
  }
  return result;
};

console.log(range(2, 3, 15));
