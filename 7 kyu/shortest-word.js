'use strict';
let findShort = s => s.split(' ').map(i => i.length).sort((a,b) => a - b)[0];
let findShort = s => Math.min(...s.split(" ").map (s => s.length));

console.log(findShort("bitcoin take over tshe world maybe wssso knows perhaps"));
