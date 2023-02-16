/*
Factory function is nothing but a code pattern 

In programming when we need to do the same work,we use loop
at the same time if we need dynamic data than we use a function to take the 
parameters from users 

so now think about a big industry where so many users add in database and some of the change their info
in this case we can use object where their data will store and they can change that using object methods
*/

const Person = (name, age, job = null) => {
  return {
    name,
    age,
    job,
    work: () => {
      if (job !== null) {
        return `${name} is working now`;
      } else {
        return `${name} is not working now`;
      }
    },
    experience: () => {
      if (job !== null) {
        return `${name} have some experience`;
      } else {
        return `${name} have no experience`;
      }
    },
  };
};

const jaber = Person("jaber", "21", "doing");
const queen = Person("Queen", "18", null);

console.log(jaber, queen.work());

/*

in this example we can create a new user without duplicating same text 
just call a function give it necessary info as parameters that's it 

*/

// Another good example of Factory function

/*
const person=(tag,content,color)=>{
  let el = document.createElement(tag);
  el.innerText = content;
  el.style.color = color;
  document.body.append(el);
  return{
    setContent:(content)=>{
      el.innerText = content;
    },
    setColor:(color)=>{
      el.style.color = color;
    }
  };
};
const me = person("h1","I am jaber","black");
me.setContent("I am really a good boy");
const queeni = person("h1","I am Queen","pink");
const princess = person("h1","I am princess","orange");
*/
