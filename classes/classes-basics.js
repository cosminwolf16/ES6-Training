class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, my name is ' + this.name);
  }
}

let person = new Person('Cosmin');
person.greet();

console.log(person.__proto__ == Person.prototype);
