/*
  Suppose we have a array and we want to find any value from that array than we can use Array.prototype.find()
  mwthod
  
  Array.find() method use a callback function that take 3 perameter .Let's check the basic structure


  Array.find(function(currentValue,currentIndex,arr){
    
    return something;

  },this)


  or,

  Array.find((currentValue,currentIndex,arr)=>{
    return something;
  })


  if we use fat arrow function we don't need this 
  keyword


  
  Remember that Array.find() will stop if the statement is matched.

  suppose we have an array of numbers

  const num = [..."0123456789"];
  const ans = num.find((value,ind3x,arr)=>{
    return value > 4;
  })

  this will return 5 than stop executing the code.

*/

const num = [..."0123456789"];
const ans = num.find((value, index, array) => {
  return value > 2;
});
console.log(ans); // 3

const ans2 = num.find((value, index, array) => {
  return index > 3;
});
console.log(ans2); // 4
