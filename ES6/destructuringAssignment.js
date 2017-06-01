'use strict';

// destructuring arrays

let [firstName, lastName] = ["John", "Doe"];

alert(firstName); // John
alert(lastName);  // Doe

/* ------------------------------------------------- */

let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)

/* ------------------------------------------------- */

// значения по умолчанию
let [firstName="Гость", lastName="Анонимный"] = [];

alert(firstName); // Гость
alert(lastName);  // Анонимный

/* ------------------------------------------------- */

// destructuring  objects

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, width: w, height} = options;

alert(title);  // Меню
alert(w);      // 100
alert(height); // 200
