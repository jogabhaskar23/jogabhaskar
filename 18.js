const input = require('readline-sync');
let a = input.questionInt("Enter a number, ");
let b = input.questionInt("Enter a number, ");
let c = input.questionInt("Enter a number, ")
let d = input.questionInt("Enter a number, ")
if (a > b) 
{
  var l=a,s=b
}
else
{
    l=b,s=a
}
if(c>d)
{
   var l1=c,s1=d
}
else
{
  var  l1=d,s1=c
}
if(l>l1)
{
  var  l2=l,s2=l1
}
else
{
    l2=l1,s2=l
}
if(s>s1)
{
  var  l3=s,s3=s1
}
else
{
    l3=s1,s3=s
}
if(l3>s2)
{
  var  l4=l3,s4=s2
}
else
{
    l4=s2,s4=l3
}
if(s4>s3)
{
    console.log(s4)
}
else
{
    console.log(s3)
}