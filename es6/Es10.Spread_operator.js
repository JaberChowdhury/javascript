// spread operator

const number1 = (x, y, z) => {
  console.log(x + y + z);
};
const array = [10, 20, 30];
// number1(array[0],array[1],array[2]);
number1(...array); // es6 is easy

// array concatenation

const number2 = [67, 56, 577, 57, 66, 6, 67];
const number3 = [88, 6776, 777, 77, 67, 7, 77, 9];
// const number = number2.concat(number3);
const number = [...number2, ...number3]; // es6 is easy
console.log(number);

// object  concatenation

const object1 = {
  name: "Jaber chowdhury",
  age: "19",
};
const info = {
  nationality: "Bangladeshi",
  from: "Earth",
};

const object = {
  ...object1,
  ...info,
}; // es6 is easy

console.log(object);
