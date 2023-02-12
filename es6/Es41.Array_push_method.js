/*
Array.__proto__.push() change the main array
*/

let number = [..."0123456789"];

const result = number.push([..."717181881818"]);

console.log(number); // Understood
console.log(result); // wtf it's return 11
