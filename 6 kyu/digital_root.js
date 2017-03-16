'use strict';
function digital_root(n) {
  let str = (n + '').split('').map(i => +i).reduce((a, b) => a + b);
  return str >= 10 ? digital_root(str) : str;
}

console.log(digital_root(568));
