// destructuring a object is important in modern web development

const person = {
  firstName: "Mohammad",
  lastName: "Chowdhury",
  favourite: "programming",
  hobby: "coding",
};

// This is called destructuring
const { firstName, lastName } = person;
console.log(firstName); // Mohammad
console.log(lastName); // Chowdhury

// let's  rename it
const { firstName: fName, lastName: lName } = person;
console.log(fName); // Mohammad
console.log(lName); // Chowdhury

// let's use default parameters
const {
  firstName: fNames = "MOHAMMAD",
  middleName: mName = "Hossain",
  lastName: lNames,
} = person;
console.log(fNames);
console.log(lNames);
console.log(mName);

const result = {
  bangla: 80,
  english: 100,
  math: 88,
  biology: 89,
  physics: 70,
  ict: 99,
};

// let's use spread operator
const { bangla, english, ...x } = result;
console.log(x); // { math: 88, biology: 89, physics: 70, ict: 99 }
