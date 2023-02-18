/*
constructor function is similar to factory  function 
but it has some difference

if we want to create a constructor function we need to use 
regular function structure 

function Person(){
  return something;
}

📛 we can't use fat arrow function
*/

function Person(name) {
  this.name = name;
  this.details = () => {
    return `${name} is a good person.${name} is good fou your job`;
  };
  this.arr = () => {
    return name.split("");
  };
}

const me = new Person("Black");

/*

This is how we can use constructor function 
it's similar 5o factory function 

But one thing is that we can see the best example 
of inheritance in this constructor function

So we created me Object using Person constructor function

now we can make more of them by sending a name using parameter

But what if we send the previous Object that we have created??
let's  see
*/

const queen = new Person(me);
const kids = new Person(queen);
console.log(me, queen, kids);

/*
Person
  name:Black
  details:()=&gt;{...}
  arr:()=&gt;{...}
  __proto__:Person~~~~~~~~~~~~~~~~《》

Person
  name:Person
    name:Black
  details:()=&gt;{...}
  arr:()=&gt;{...}
  __proto__:Person~~~~~~~~~~~~~~~~《》
    details:()=&gt;{...}
    arr:()=&gt;{...}
    __proto__:Person~~~~~~~~~~~~~~《》

Person
  name:Person
    name:Person
      name:Black
  details:()=&gt;{...}
  arr:()=&gt;{...}
  __proto__:Person~~~~~~~~~~~~~~~~《》
    details:()=&gt;{...}
    arr:()=&gt;{...}
    __proto__:Person~~~~~~~~~~~~~~《》
      details:()=&gt;{...}
      arr:()=&gt;{...}
      __proto__:Personp~~~~~~~~~~~《》
*/

/*
it looks interesting!!
every Object have a same codeblock
and that is __proto__

actually every Object we have created is 
inherited from the Person Object

Person  Object is the blueprint of those
Objects that we have created

and this is called prototypal chain

*/
