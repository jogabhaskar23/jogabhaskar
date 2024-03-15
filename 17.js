const input = require('readline-sync');
let U = input.questionInt("Enter a number, ");
if(U<=50)
{
   var B=U*0.50
   var S=B*20
   var T=B+S
    console.log(T)
}
if(U<=150)
{
    B=(U*0.50)+(U-50)*0.75
    S=B*20/100
    T1=B+S
    console.log(T1)
}
if(U<=250)
{
    B=100+(U-150)*1.20;
    S=B*20/100;
    T2=B+S;
    console.log(T2)
}
else
{
    B=220+(U-250)*1.50;
    S=B*20/100;
    T3=B+S;
    console.log(T3)
}