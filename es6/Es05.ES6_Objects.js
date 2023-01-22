// Noemal object
var obj = {
  name: "Red-remix",
  height: 100,
  grow() {
    this.height += 2;
  },
};
obj.grow();
// Es6 object

let x = "Dhaka";
let y = "Bangladesh";
let location = {
  x,
  y,
};
console.log(location.x);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// 🔥🔥🔥🔥🔥 Computed Property Names🔥🔥🔥🔥🔥
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
/*
With ES6, you can now use computed property names.
Using the square bracket notation [], we can use an 
expression for a property name, including concatenating
strings. This can be useful in cases where we want to 
create certain objects based on user data
(e.g. id, email, and so on).
*/
var prop = "name";
var id = "1234";
var mobile = "0176";
let onject = {
  [prop]: "Red-Remix",
  [`usr_${id}`]: "${mobile}",
};

// Confusing🤗

/*
Object.assign() in ES6

ES6 adds a new Object method assign() that allows 
us to combine multiple sources into one target to 
create a single new object. 

Object.assign() is also useful for creating a
duplicate of an existing object.
*/

let person = {
  name: "Black",
  age: 17,
  gender: "male",
};
let student = {
  name: "student",
  age: 19,
  xp: 199,
};
let newstudent = Object.assign({}, person, student);
