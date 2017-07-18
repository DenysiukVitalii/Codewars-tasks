'use strict';

function objtostr(object) {
  let array = [];
  	for (let key in object) {
  			array.push(key, '=', object[key], '&');
  	}
    console.log(array.slice(0, -1).join(''));
  return array.slice(0, -1).join('');
}

console.log(objtostr({
			 		"action": "remove_item",
					"item": 1,
					"id": 2
				}));
