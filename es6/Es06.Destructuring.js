/*
Array Destructuring in ES6
  
The destructuring assignment syntax is a JavaScript 
expression that makes it possible to unpack values
from arrays, or properties from objects, into distinct
variables. 
ES6 has added a shorthand syntax for destructuring 
an array.
*/
let arr = [1, 2, 3, 4];
let [one, two, three, four] = arr;
console.log(one);
console.log(two);
console.log(three);
// using function
let fun = () => {
  return [1, 2, 3];
};
let [ones, , twos] = fun();
console.log(twos);

/*
 Object Destructuring in ES6
 
 Similar to Array destructuring, Object 
 destructuring unpacks properties into 
 distinct variables.
 
*/
let obj = {
  h: 12344,
  s: 76543,
};
let { h, s } = obj;
console.log(h);

// More simple
let a, b;
({ a, b } = {
  name: "black ",
  id: "hiii",
});
console.log(a + b); // facing problem

// extra simple
let { x, y } = {
  x: "Bangladesh ",
  y: "Dhaka",
};
console.log(x + y);
