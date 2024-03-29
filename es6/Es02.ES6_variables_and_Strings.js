/*

var & let 
*/
var a = 0;
var aa = "String";
let b = 0;
let bb = "String";
const c = 0;
const cc = "String";
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
if (true) {
  let name = "Red_Remix";
}
console.log(name); // Generate an Error
/*
In this case, the name variable is accessible 
only in the scope of the if statement because
it was declared as let.
*/
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// 🔥🔥🔥🔥🔥🔥🔥Clear_Concept🔥🔥🔥🔥🔥🔥🔥🔥🔥
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

var x = 5;
if (true) {
  var x = 10;
  console.log(x); // return 10
}
console.log(x); // return 10

// Let's use let 🔥🔥🔥🔥🔥
let y = 10;
if (true) {
  let y = 20;
  console.log(y); // return 20
}
console.log(y); // return 10 🔥

//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//One of the best uses for let is in loops:
for (let t = 0; t <= 100; t++) {
  console.log(t);
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// 🔥🔥🔥🔥🔥Template Literals in ES6🔥🔥🔥🔥🔥
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

/*
Template literals are a way to output variables in 
the string. 
*/
let name = "Red-Remix";
let msg = "welcome " + name + " !";
console.log(msg);
/*
ES6 introduces a new way of outputting variable 
values in strings. The same code above can be
rewritten as:
*/
let names = "Red-Remix and Red-Remix2";
let msgs = `welcome ${names} !`;
console.log(msgs);
/*
To escape a backtick in a template literal, 
put a backslash \ before the backtick.
*/
