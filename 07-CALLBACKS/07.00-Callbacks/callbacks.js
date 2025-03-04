const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const calculate = (a,b,operator) => operator(a,b);

console.log(calculate(15,5,add)); // 20
console.log(calculate(15,5,subtract)); // 10
console.log(calculate(15,5,multiply)); // 75
console.log(calculate(15,5,divide)); // 3
