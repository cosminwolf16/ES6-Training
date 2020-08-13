class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

Helper.logTwice('Logged');

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
  }
}

class Cosmin extends Person {
  constructor(age) {
    super('Cosmin');
    this.age = age;
  }
}

let cosmin = new Cosmin(21);
