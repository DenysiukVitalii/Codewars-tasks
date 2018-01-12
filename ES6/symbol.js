'use strict';

let sym = Symbol();
console.log( typeof sym ); // symbol

let sym = Symbol("name");
console.log( sym.toString() ); // Symbol(name)

console.log( Symbol("name") == Symbol("name") ); // false

// создание символа в реестре
let name = Symbol.for("name");

// символ уже есть, чтение из реестра
console.log( Symbol.for("name") == name ); // true

// создание символа в реестре
let name = Symbol.for("name");

// получение имени символа
console.log( Symbol.keyFor(name) ); // name

let user = {
  name: "John",
  age: 30,
  [Symbol.for("isAdmin")]: true
};

// в цикле for..in также не будет символа
console.log( Object.keys(user) ); // name, age

// доступ к свойству через глобальный символ — работает
console.log( user[Symbol.for("isAdmin")] );
