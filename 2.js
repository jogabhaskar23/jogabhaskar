const input = require('readline-sync');
let A = input.questionInt("Enter a number, ");
let B = input.questionInt("Enter a number, ");
A=A+B
B=A-B
A=A-B
console.log(A,B)