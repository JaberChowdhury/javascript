/*
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

document.getElementById("demo").innerHTML = person;

Some common solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify

*/

// Displaying the Object in a Loop

/*
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let txt = "";
for (let x in person) {
txt += person[x] + " ";
};

document.getElementById("demo").innerHTML = txt;
*/

/*
Using JSON.stringify()
Any JavaScript object can be stringified 
(converted to a string) with the JavaScript 
function JSON.stringify():
*/

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

let myString = JSON.stringify(person);
console.log(myString);

// stringify an Array
console.log("stringify an Array");

const arr = ["John", "Peter", "Sally", "Jane"];
let x = JSON.stringify(arr);
console.log(x);
