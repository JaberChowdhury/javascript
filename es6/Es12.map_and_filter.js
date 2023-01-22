const Mainarray = [
  181, 7, 8, 6, 7, 5, 7, 6, 86, 86, 86, 3, 18, 67, 5, 76, 7, 6, 8,
];

/*
var power = [];
Mainarray.forEach((value)=>{
  power.push(value*value);
});
*/
// console.log (power);

// let's use es6 feature
/*
const newArray = Mainarray.map((value,index,array)=>{
  return statement ;
});

*/
const power = Mainarray.map((value) => {
  return value * value;
});
console.log(power);

// filter

const less = Mainarray.filter((value) => {
  return value > 10;
});
console.log(less);
