const input = require('readline-sync');
let A = input.questionInt("Enter a number, ");
let B = input.questionInt("Enter a number, ");
let C = input.questionInt("Enter a number, ");
var max;
var smax;
var o;
var p;
if(A>B)
{ 
    max=A
    smax=B
}
else
{
   max=B
   smax=A
}
if(max>C)
{
   o=max
   p=C
}
else
{
  o=C
  p=max
} 
if(p>smax)
{
    console.log(p)
}
else
{
    console.log(smax);
}
