function* gen(end) {
  for (let i = 0; i < end; i++) {
    yield i;
  }
}

let it = gen(2);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
