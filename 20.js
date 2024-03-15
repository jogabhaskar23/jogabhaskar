const input = require('readline-sync');
let N = input.questionInt("Enter a number, ");
var i=1,count=0
while(N!=0)
{
    var r=N%10
    count+=1
    N=Math.floor(N/10)
    i++;
}
console.log(count)