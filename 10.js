const input = require('readline-sync');
let N = input.questionInt("Enter a number, ");
if(N>0)
{
    console.log('positive');
}
else if (N < 0)
{
    console.log('negative');
}
else 
{
    console.log('zero');
}