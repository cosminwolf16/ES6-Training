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

  greet() {
    console.log('Hello!');
  }

  greetTwice() {
    super.greet();
    super.greet();
  }
}

let cosmin = new Cosmin(21);
cosmin.greetTwice();
