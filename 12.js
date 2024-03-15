input = require('readline-sync');
let a = input.questionInt("Enter a number, ");
let b = input.questionInt("Enter a number, ");
let c = input.questionInt("Enter a number, ")
var max;
var min;
var m;
var n;
if (a>b)
{
    max=a
    min=b
}
else
{
    max=b
    min=a
}
if(max>c)
{
m=max
n=c
}
else
{
    m=c
    n=max
}
if(m>n)
{
    console.log(m)
}
else
{
console.log(n)
} 