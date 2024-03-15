input = require('readline-sync');
let n = input.questionInt(" enter a number, ");
let arr=[];
var i=0;
while(i<n)
{
 arr[i]=input.questionInt('enter a number,  ')
 i++;
}
var j=i+1;
var p=1;
while(j<n)
{
 if(arr[i]==arr[j]) 
 {
    p=p+1
    var k=j
 }
 else
 {
    p=p;
 }
 if(k<n)
 {
    arr[k]=arr[k+1],
    k++;
 }
 n=async function getData() {
   return Promise.resolve('data');
 }
 
 async function getMoreData(data) {
   return Promise.resolve(data + 'more data');
 }
 
 async function getAll() {
   const data = await getData();
   const moreData = await getMoreData(data);
   return `All the data: ${data}, ${moreData}`;
 }
 
 getAll().then((all) => {
   console.log('all the data')
 })
}
