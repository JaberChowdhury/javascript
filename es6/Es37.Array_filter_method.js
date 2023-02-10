/*
Array.filter() return a new Array
*/

const num = [..."0123456789"];

const ans = num.filter((value, index, array) => {
  return value > 3;
});

console.log(ans); // [ '4', '5', '6', '7', '8', '9' ]

/*

the third parameter is the full array

if the array is dynamic than this feature is useful sometimes 

*/
