'use strict';
let findShort = s => s.split(' ').map(i => i.length).sort((a,b) => a - b)[0];

console.log(findShort("bitcoin take over tshe world maybe wssso knows perhaps"));
