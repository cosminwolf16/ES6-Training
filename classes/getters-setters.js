class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length > 2) {
      this._name = value;
    } else {
      console.log('Rejected');
    }
  }
}

let person = new Person('Cosmin');

console.log(person._name);

person.name = 'Hori';

console.log(person._name);
