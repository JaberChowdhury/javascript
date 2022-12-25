/*
Normal function  in js
*/
function myfunction(a, b) {
    console.log(a + b);
}
myfunction(7, 8);
/*
function in ES 6
*/
const esfunction = (x, y) => {
    let math = (x * y + x - y);
    console.log(math);
}
esfunction(68, 79);


/*
This new syntax is quite handy when you just need a
simple function with one argument.
You can skip typing function and return, as well as 
some parentheses and braces.
  */
const abc = x => "welcome " + x;
// No parameter 
const cba = () => alert("jdjdjdj");
cba();


/*
The syntax is very useful for inline functions.
For example, let's say we have an array, and for 
each element of the array we need to execute a 
function. We use the forEach method of the array 
to call a function for each element:
*/
var arr = [18, 68, 69, 6, 88, 6, 98, 6, 8, 7, 7, 8];
arr.forEach(function(xy) {
    console.log(xy * 7);
})

var arr2 = [2672, 876, 7, 8, 86, 7, 8, 7, 77, 8, 6, 6, 7, 7, 66, 6, 7, 88];
arr2.forEach(v => {
    console.log(v * 7);
})

// Default Parameters in ES6
function nef(a, b = 9, c = 89) {
    console.log(a + b + c);
}
nef(5);

const esfu = (a, b = 8896, c = 8666) => {
    console.log(a * b * c);
}
esfu(777);