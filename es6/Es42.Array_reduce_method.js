/*
Array.__proto__.reduce() 
this is one of the most important array method 

📛 array.__proto__.reduce() don't change the main array
   it's create a new value
   
   
   Array.reduce((prevValue,currentValue,currentIndex,array)=>{
     return something;
   }, initial)
   
*/

const num = [..."0123456789"];

const sum = num.reduce((prev, current, currentindex, arr) => {
  return parseInt(prev) + parseInt(current);
}, 0);

console.log(sum);
