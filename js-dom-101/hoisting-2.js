// console.log('a:', a);
let a = 2;
const b = 2;

a = 42;

function hello() {
  let b = 'bbb';
}

hello();

if (true) {
  let b = 3;
  console.log("b:", b);
  let a = 4;
  console.log("a:", a);
}

console.log("a:", a);
console.log("b:", b);
