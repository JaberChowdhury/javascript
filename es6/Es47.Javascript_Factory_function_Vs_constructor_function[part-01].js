/*
When we have to use factory function and when we 
have to use constructor function 
Ok it's serious !!
let's see
*/

// Factory function
const Factory = (name, money) => {
  return {
    name,
    working: () => {
      return `${name} salary is ${money}`;
    },
  };
};
const me = Factory("Black", "100000"); // It's  ok
const queen = Factory("Queen", "100000"); // It's also ok

Object.prototype.making = function () {
  return `${this.name} is doing his/her work`;
};

// console.log (me.making(),queen.making()); // It's too much dangerous
// console.log (window.making()); // dangerous also
// constructor function

function Person(name, work) {
  this.name = name;
  this.work = `${name}'s work is ${work}`;
}

const black = new Person("Jaber", "Developer");

console.log(black); // This is ok
console.log(black.making()); // but this is not ok

/*

we came here to prove that which code patterns is better 
but we face a problem both of them

a method called making we have created is now available in all
the objects of our code and it's really bad idea 
also a security issue :)

but we can fix that in a different way
let's go to the part two
*/
