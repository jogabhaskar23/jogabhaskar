const input = require("readline-sync")
let size = input.questionInt("Enter the size of the array: ");
let array = [];
for(let i=0; i<size; i++)
{
    let element=input.questionInt("Enter  elements: ");
    array.push(element)
}
 for(let i=0;i<size;i++)
{
    for(let j = i+1;j<size;j++)
    {
        if(array[i]==array[j])
        {
            console.log(array[j]);
        }
    }
}