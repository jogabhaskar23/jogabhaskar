const input = require('readline-sync');
let N = input.questionInt("Enter a number, ");
if(N%2==0)
{
    console.log(N);
}
else
{
 console.log(N*2);
}