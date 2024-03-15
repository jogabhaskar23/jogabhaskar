// const input = require('readline-sync');
// let N = input.questionInt('enter: ');
// let i = 1, 
// c = 1,
// s = N - 1;
// while (i <= N)
// {
//     str = '';
//     for (let i = 1; i <= s; i++)
//     {
//         str += ' ';
//     }
//     let j = 1;
//     while(j <= c)
//     {
//         str += '*';
//         j++;
//     }
//     console.log(str);
//     i++;
//     c += 2;
//     s--;
// }
// i = N - 1;
// c -= 4; 
// s = 1;
// while (i > 0)
// {
//     str = '';
//     for (let i = 1; i <= s; i++)
//     {
//         str += ' ';
//     }
//     let j = 1;
//     while(j <= c)
//     {
//         str += '*';
//         j++;
//     }
//     console.log(str);
//     i--;
//     c -= 2;
//     s++;
// }


const input = require('readline-sync');
let N = input.questionInt('enter: ');
let i = 1;
let s = N - 1;
let S = 1;
while (i <= N)
{
    str = '';
    let inxS = 1;
    while(inxS <= s)
    {
        str += ' ';
        inxS++;
    }
    if (i > 1)
    {
        str += '*';
        let j = 1;
        while (j <= S)
        {
            str += ' ';
            j++;
        }
        str += '*';
        S+=2;
    }
    else
    {
        str += '*'
    }
    console.log(str);
    s--;
    i++;
}
i = i - 2;
s = 1;
S = S - 4;
while (i > 0)
{
    str = '';
    let inxS = 1;
    while(inxS <= s)
    {
        str += ' ';
        inxS++;
    }
    if (i > 1)
    {
        str += '*';
        let j = 1;
        while (j <= S)
        {
            str += ' ';
            j++;
        }
        str += '*';
        S-=2;
    }
    else
    {
        str += '*'
    }
    console.log(str);
    s++;
    i--;
}