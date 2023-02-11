/*

we know that string.__proto__.slice() return a new string by removing external part 

In this same way we can cut an array using
Array.__proto__.slice() me5hod

*/

const num = [..."0123456789"];

const test1 = num.slice(2, 6); // [ '2', '3', '4', '5' ]
const test2 = num.slice(-4, 9); //[ '6', '7', '8' ]
const test3 = num.slice(-4, -7); //[]
const test4 = num.slice(); //[..."0123456789"]

console.log(test4);
