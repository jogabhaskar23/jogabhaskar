// const input = require("readline-sync")
// let n = input.questionInt("Enter the number of elements: ");
// let arr = [];
// let freq = {};

// let i = 0;
// while (i < n) {
//     let num = input.questionInt("Enter number ");
//     arr.push(num);
//     i++;
// }


// i = 0;
// while (i < n) {
//     let num = arr[i];
//     if (freq[num]==undefined) {
//         freq[num] = 1;
//     } else {
//         freq[num]++;
//     }
//     i++;
// }
// for (let key in freq) {
//     console.log(key + " - " + freq[key]);
// }




const input = require('readline-sync');
let N = input.questionInt('enter size of array: ');
const a = [];
let i = 0;
while (i < N)
{
    a[i] = input.questionInt('enter element: ');
    i++;
}
i = 0;
while (i < N)
{
    let j = i + 1;
    let p = 1;
    while (j < N)
    {
        if (a[i] == a[j])
        {
            p++;
            let k = j;
            while (k < N-1)
            {
                a[k] = a[k+1];
                k++;
            }
            N--;
        }
        else
        {
            j++;
        }
    }
    console.log(a[i] + '-' + p);
    i++;
}