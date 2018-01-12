'use strict';

// default parameters

function showMenu(title = "Без заголовка", width = 100, height = 200) {
  console.log(title + ' ' + width + ' ' + height);
}

showMenu("Меню"); // Меню 100 200

// spread instead of arguments

function showName(firstName, lastName, ...rest) {
  console.log(firstName + ' ' + lastName + ' - ' + rest);
}

showName("Юлий", "Цезарь", "Император", "Рима"); // выведет: Юлий Цезарь - Император,Рима

let numbers = [2, 3, 15];

// Оператор ... в вызове передаст массив как список аргументов
// Этот вызов аналогичен Math.max(2, 3, 15)
let max = Math.max(...numbers); // Math.max.apply(Math, numbers);

console.log( max ); // 15


// destructuring in parameters

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

function showMenu({title, width, height}) {
  console.log(title + ' ' + width + ' ' + height); // Меню 100 200
}

showMenu(options);

// arrow functions

let sum = (a,b) => a + b;

// Внутри функций-стрелок – тот же this, что и снаружи.
// Функции-стрелки не имеют своего arguments
