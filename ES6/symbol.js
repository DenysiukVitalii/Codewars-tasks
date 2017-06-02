'use strict';

let sym = Symbol();
alert( typeof sym ); // symbol

let sym = Symbol("name");
alert( sym.toString() ); // Symbol(name)

alert( Symbol("name") == Symbol("name") ); // false

// создание символа в реестре
let name = Symbol.for("name");

// символ уже есть, чтение из реестра
alert( Symbol.for("name") == name ); // true

// создание символа в реестре
let name = Symbol.for("name");

// получение имени символа
alert( Symbol.keyFor(name) ); // name

let user = {
  name: "John",
  age: 30,
  [Symbol.for("isAdmin")]: true
};

// в цикле for..in также не будет символа
alert( Object.keys(user) ); // name, age

// доступ к свойству через глобальный символ — работает
alert( user[Symbol.for("isAdmin")] );
