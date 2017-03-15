'use strict';

const splitter = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

console.log(splitter('StringStringString'));
