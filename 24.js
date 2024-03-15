const input = require('readline-sync');
let a= input.questionInt("Enter a number, ");
let b= input.questionInt("Enter a number, ");
L = a*b;
while (a % b != 0)
{
    var r = a % b;
    a = b;
    b = r;
}
console.log(b, L/b);