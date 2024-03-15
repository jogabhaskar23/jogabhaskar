const input = require('readline-sync');
let N = input.questionInt("Enter a number, ");
var rev=0
while(N!=0)
{
    var d=N%10
    rev=rev*10+d
    N=Math.floor(N/10);
}
console.log(rev)