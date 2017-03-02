'use strict';
var PRESET_COLORS = {
    "blue": "#0000ff",
    "gold": "#ffd700",
    "gray": "#808080",
    "green": "#008000",
    "grey": "#808080",
    "lime": "#00ff00",
    "red": "#ff0000",
}

function parseHTMLColor(color) {
  let obj = {};
  let arr = [];

  if (color.split('')[0] != '#') {
    for (var key in PRESET_COLORS) {
     if (key + "" == color.toLowerCase())
     arr = PRESET_COLORS[key].split('').splice(1);
    }
  } else arr = color.split('').splice(1);

  if (arr.length == 3) arr = arr.map((i) => i.repeat(2)); else {
    let temp = [];
    for (var i = 0; i < arr.length; i+=2)
      temp.push(arr[i] + arr[i+1]);
      arr = arr.slice(0,0);
      arr = temp.slice(0);
  }
  arr = arr.map((i) => '0x' + i - '');

  obj.r = arr[0];
  obj.g = arr[1];
  obj.b = arr[2];

  return obj;
}


console.log(parseHTMLColor('blue'));
console.log(parseHTMLColor('#3D2'));
console.log(parseHTMLColor('#82FF10'));
