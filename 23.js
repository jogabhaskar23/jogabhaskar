const input = require('readline-sync');
let n = input.questionInt("Enter a number, ");
let m=1;
for(i=1;i<=n;i++)
{
    if(n%i==0)
    {
     m=m*i
    }
} 
  if(m==n)
  {
    console.log("yes")
  }
  else
{
 console.log("no")
}