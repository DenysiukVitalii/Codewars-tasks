'use strict';

class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
user.sayHi(); // John

/* ------------------------------------------- */

// static properties

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static createGuest() {
    return new User("Гость", "Сайта");
  }
}

//let user = User.createGuest();

console.log( user.firstName ); // Гость

console.log( User.createGuest ); // createGuest ... (функция)

/* ------------------------------------------- */

// Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("I walk: " + this.name);
  }
}

class Rabbit extends Animal {
  walk() {
    super.walk();
    console.log("...and jump!");
  }
}

new Rabbit("John").walk();
// I walk: John").
// and jump!

/* ------------------------------------------- */

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor() {
    console.log(this); // ошибка, this не определён!
    // обязаны вызвать super() до обращения к this
    super("Rabbit");
    // а вот здесь уже можно использовать this
  }
}

new Rabbit();
