const input = require('readline-sync');
let A = input.questionInt("Enter a number, ");
if(A<=10000)
{
     HRA=A*(20/100);
     DA=A*(80/100);
     T=A+HRA+DA;
     console.log(T)
}
if(A<=20000)
{
    HRA=A*(25/100);
    DA=A*(90/100);
    T1=A+HRA+DA;
    console.log(T1)
}
else
{
     HRA=A*(30/100);
     DA=A*(95/100);
     T2 = A+HRA+DA; 
     console.log(T2)
}
