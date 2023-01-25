/*
JavaScript Properties
Properties are the values associated with a JavaScript object.

A JavaScript object is a collection of unordered properties.

Properties can usually be changed, added, and deleted, but some are read only.





// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
The JavaScript for...in statement loops through the
properties of an object.


*/
const person = {
  fname: " Jaber",
  lname: " Chowdhury",
  age: 25,
};
// Add new property in a object
person.nationality = "Bangladeshi";
// Deleting a property
delete person.age;

for (let x in person) {
  console.log(x);
}

//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//Nested Objects
//Values in an object can be another object

const me = {
  name: "Jaber",
  age: 19,
  hobbies: {
    mobile: "Reading code documentation",
    Laptop: "Don't have any laptop[25 January 2023]",
    pc: "Don't have any desktop now :(",
  },
};
for (let x in me) {
  console.log(x);
}
// access  nested object properties
console.log(me.hobbies.pc);

// Nested array and object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let x in myObj) {
  console.log(x);
}
