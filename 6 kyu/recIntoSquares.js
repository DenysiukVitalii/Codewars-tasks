'use strict';

function sqInRect(lng, wdth){
  if (lng == wdth) return null;
  let squares = [];

  while (lng !== wdth) {
    let min = Math.min(lng, wdth);
    let max = Math.max(lng, wdth);
    squares.push(min);
    lng = min;
    wdth = max - min;
  }
  squares.push(lng);

  return squares;
}

console.log(sqInRect(20,14));
