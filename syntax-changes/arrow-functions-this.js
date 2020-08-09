const button = document.querySelector('button');

function fn() {
  console.log(this);
}
fn();

const fn2 = () => console.log(this);

fn2();

button.addEventListener('click', fn2);
