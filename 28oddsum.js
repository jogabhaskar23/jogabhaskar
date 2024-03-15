input = require('readline-sync');
let n = input.questionInt(" enter a number, ");
var i=1,s=0;
while(i<=n)
{
    s = s+i;
    i=i+2;
}
console.log(s)