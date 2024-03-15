const input = require('readline-sync');
let A = input.questionInt("Enter a number, ");
let B = input.questionInt("Enter a number, ");
C= Math.floor((A-1)/B);
console.log(C*B);
