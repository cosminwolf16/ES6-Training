function* gen(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (error) {
      console.log(error);
    }
  }
}

let it = gen(2);
console.log(it.next());
console.log(it.return('O puscat'));
console.log(it.next());
console.log(it.next());
