const input = require('readline-sync');
let N = input.questionInt("Enter a number, ");
var i=1,S=0;
while(i<=N)
{
    S=S+1/i;
    i++;
}
console.log(S);