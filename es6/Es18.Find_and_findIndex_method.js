const array = [18,5,55,655,6,55,88,566,87,677,556,6556,66,6,68,8,7,7,6,67,8,8,7,7,77,8];

const result = array.find((value)=>{
  return value%2!==0;
});
console.log (result);


// findIndex

const index = array.findIndex(6);
console.log (index);