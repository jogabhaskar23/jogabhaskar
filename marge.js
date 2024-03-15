const input = require("readline-sync")
let N = input.questionInt("enter length for first array: ");
let M = input.questionInt('enter length for second array: ');
const A = [],
B = [],
C = [];
for (let i = 0; i < N; i++)
{
    A[i] = input.questionInt(`enter element ${i + 1} for first array: `);
}
for (let i = 0; i < M; i++)
{
    B[i] = input.questionInt(`enter element ${i + 1} for second array: `)
}
let i = 0,
j = 0,
k = 0;
while (k < N + M)
{
    if (i < N)
    {
        if (j<M)
        {
            if (A[i] < B[j])
            {
                C[k] = A[i];
                i++;
            }
            else
            {
                C[k] = B[j];
                j++;
            }
        }
        else
        {
            C[k] = A[i];
            i++;
        } 
    }
    else
    {
        C[k] = B[j];
        j++;
    }
    k++;
}
console.log(C);


// const input = require('readline-sync');
// function loop(A, N)
// {
//     for (let i = 0; i < N; i++)
//     {
//         A[i] = input.questionInt(`enter element ${i + 1} of array:`);
//     }
// }
// const A = [];
// let N = input.questionInt('enter length of array 1: ');
// loop(A, N);
// let M = input.questionInt(`enter length of second array: `);
// const B = [];
// loop(B, M);
// const C = [];
// let k = 0, 
// i = 0,
// j = 0;
// while(k < M + N)
// {
//     C[k] = !(i < N) ? B[j]: !(j < M) ? A[i]: (A[i] < B[j]) ? A[i]:B[j];
//     if (C[k] == A[i])
//     {
//         i++;
//     }
//     else
//     {
//         j++;
//     }
//     k++;
// }
// console.log(C);



