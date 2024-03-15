const input = require('readline-sync');
let N = input.questionInt("Enter a number, ");
var s=0
while(N!=0)
{
    var r=N%10
    s=s+r
    N=Math.floor(N/10)
}
console.log(s)