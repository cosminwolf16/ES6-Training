let obj = {
  name: 'Cosmin',
  age: 21,
  greet: function () {
    console.log('Hello there');
  },
};

let { name, age, greet: hello } = obj;
console.log(name, age);
hello();
