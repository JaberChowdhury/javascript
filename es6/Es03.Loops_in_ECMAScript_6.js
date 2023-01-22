/*
For loop in normal javascript 
*/
var arr = [1, 7, 8, 5, 8, 6, 77, 6, 7, 6, 67772, 67, 6, 6, 88];
for (let x = 0; x < arr.length; x++) {
  console.log(arr[x]);
}
/*
  In ES6
*/
var arr2 = [7, 77, 7, 7, 7, 77, 8, 8, 8, 8, 89, 7, 6, 5, 5, 5, 55, 6, 6];
for (let val of arr2) {
  console.log(val);
}

/*
The for...in loop is intended for iterating over the
enumerable keys of an object.
*/

var obj = {
  a: 7,
  b: 6,
  c: 89,
  d: 777,
};
for (let v in obj) {
  console.log(v);
}

for (let ch of "hello") {
  console.log(ch);
}
