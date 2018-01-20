'use strict';
const reverseLetter = str => str.split('')
                                .filter(i => i.match(/[a-z]/i))
                                .reverse()
                                .join('');

console.log(reverseLetter("ultr53o?n"));

module.exports = reverseLetter;