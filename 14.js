const input = require('readline-sync');
let N = input.questionInt("Enter a number, ");
if(N%100!=0 && N%4==0)
{
    console.log('leap year')
}
else if(N%400==0)
{
    console.log('leap year')
}
else
{
    console.log('No')
}
