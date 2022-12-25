/*
ES6 Rest Parameters
  
Prior to ES6, if we wanted to pass a variable 
number of arguments to a function, we could use 
the arguments object, an array-like object, to
access the parameters passed to the function.

For example, let's write a function that checks 
if an array contains all the arguments passed:
*/

function containsAll(arr) {
    for (let k = 0; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
let x = [2, 4, 6, 6];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));