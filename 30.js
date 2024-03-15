input = require('readline-sync');
let n = input.questionInt(" enter a number, ");
let arr=[];
var i=0;
while(i<n)
{
 arr[i]=input.questionInt('enter a number,  ')
 i++
}
n=n-1
i=n;
while(i>=0)
{
    console.log(arr[i])
    i--;
}