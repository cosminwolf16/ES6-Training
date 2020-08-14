let array = [1, 2, 3];

array[Symbol.iterator] = function () {
  let nextValue = 0;
  return {
    next: function () {
      nextValue++;
      return {
        done: nextValue > 5 ? true : false,
        value: nextValue,
      };
    },
  };
};

for (let element of array) {
  console.log(element);
}
