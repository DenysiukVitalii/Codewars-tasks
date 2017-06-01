'use strict';

// Map - коллекция для хранения записей вида ключ:значение
let map = new Map();

map.set('1', 'str1');   // ключ-строка
map.set(1, 'num1');     // число
map.set(true, 'bool1'); // булевое значение

map
  .set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

// в обычном объекте это было бы одно и то же,
// map сохраняет тип ключа
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3


// methods delete

map.delete(key);
map.clear(); // clear all map

map.has(key) // возвращает true, если ключ есть, иначе false.

// iteration

map.keys();
map.values();
map.entries();


// Set – коллекция для хранения множества значений, причём каждое значение может встречаться лишь один раз.

let set = new Set();

let vasya = {name: "Вася"};
let petya = {name: "Петя"};
let dasha = {name: "Даша"};

// посещения, некоторые пользователи заходят много раз
set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);

// set сохраняет только уникальные значения
alert( set.size ); // 3

set.forEach( user => alert(user.name ) ); // Вася, Петя, Даша

//methods

set.add(item); // добавляет в коллекцию item, возвращает set (чейнится).
set.delete(item); // удаляет item из коллекции, возвращает true, если он там был, иначе false.
set.has(item); // возвращает true, если item есть в коллекции, иначе false.
set.clear(); // очищает set.
