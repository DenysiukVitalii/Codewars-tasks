'use strict';

/* let
  1. Область видимости переменной let – блок {...}.
  2. Переменная let видна только после объявления.
  3. При использовании в цикле, для каждой итерации создаётся своя переменная.
*/

let apples = 5; // (*)

if (true) {
  let apples = 10;

  alert(apples); // 10 (внутри блока)
}

alert(apples); // 5 (снаружи блока значение не изменилось)
/* ----------------------------------------------------------------- */

alert(a); // ошибка, нет такой переменной

let a = 5;

let x;
let x; // ошибка: переменная x уже объявлена

// const

const apple = 5;
apple = 10; // ошибка

const user = {
  name: "John"
};

user.name = "Mike"; // допустимо
user = 5; // нельзя, будет ошибка
