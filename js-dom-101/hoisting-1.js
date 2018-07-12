function hello() {
  console.log('first y', y);

  if (true) {
    var y = 9;
    var something = 234;
  }

  console.log('second y', y);
  console.log('x from fn', x);
}


console.log('x before assignment', x);
if (true) {
  var x = 5;
}

console.log('x after assignment', x);

console.log(hello());
console.log('y is...', y);
