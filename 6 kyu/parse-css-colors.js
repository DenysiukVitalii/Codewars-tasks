'use strict';
function parseHTMLColor(color) {
  let obj = {};

  let arr = color.split('').splice(1);
  if (arr.length == 3) arr = arr.map((i) => i.repeat(2));
  console.log(arr);
  arr = arr.map((i) => '0x' + i - '');

  obj.r = arr[0];
  obj.g = arr[1];
  obj.b = arr[2];

  return obj;
}


console.log(parseHTMLColor('#8F0'));
