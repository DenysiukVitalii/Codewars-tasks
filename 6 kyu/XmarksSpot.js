'use strict';

const x = (n) => {
  let rows = [];
  let inc = 1, dec = n;
  for (let i = 1; i <= n; i++) {
    let cols = [];
    for (let j = 1; j <= n; j++) {
      ( (j === inc || j === dec) || (j === inc && j === dec) ) ? cols.push(1) : cols.push(0);
    }
    rows.push(cols);
    inc++; dec--;
  }
  return rows;
}

// best practices

const x = n => Array(...Array(n)).map((_, i) => Array(...Array(n)).map((_, j) => j == i || j == n - i - 1 ? 1 : 0));

console.log(x(5));
