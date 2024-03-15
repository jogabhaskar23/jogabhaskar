input = require('readline-sync');
let n = input.questionInt(" enter a number");
var s=0
for(i=1; i<n;i++)
{
 if (n%i==0)
     s=s+i
}
 if (n==s)
{
   console.log("perfact num")
}
  else
{
   console.log("not perfact num")
}