const array = [
  "Mango", 
  "Apple",
  "Guava",
  "Apple",
  "Apple",
  "Strawberry",
  "Jackfruit",
  "Strawberry",
  "Jackfruit",
  "Lemon",
  "Pineapple",
  "Carrott",
  "Lemon",
  "Pineapple",
  "Orange",
  "Carrott",
  "Orange"
  ];
const unique = new Set(array); /*
converting into a set because a set don't take any duplicate  value
*/
const final = Array.from(unique)/*
converting set into an array because we need an array for production 
we also can use spread operator 

const final = [...unique];
*/
console.log (final)