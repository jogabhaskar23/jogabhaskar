 const input = require("readline-sync")
//  const N = input.questionInt("enter the number:")
// let arr= [ ];
//     str="";
// for (let i = 0; i < N; i++)
// {
//    arr[i]=input.questionInt("enter  number");
// }
//    console.log(arr);
// for(let i=0;i<N;i++)
// {
//   for(let j=1;j<=arr[i];j++)
//   {
//      str+=">";

//   }
//   str+="\n";
// }
// console.log(str);


let M = input.questionInt("enter the row size: ");
//let N = input.questionInt("enter the column size: ");
let arr = [];
for(let i=0;i<M;i++)
{
   arr[i]=input.questionInt("enter  number");
}
let str ="";
for(let j=0;j<M;j++)
{
   str+=arr[j];
   str+= " ";
}
console.log(str);