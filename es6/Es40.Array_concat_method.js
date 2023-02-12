/*
what us the uses of Array.concat()

it's simple Array1 + Array2 + Arrayn
*/

const arr1 = [..."📛🙂🥀😅😄"]; // It's a array
const arr2 = [..."0123456789"]; // It's a array
const arr3 = [..."abcdefghij"]; // It's a array

const result1 = arr1.concat(arr2, arr3);

const result2 = [...arr1, ...arr2, ...arr3];

console.log("📛📛📛📛📛📛 result1 📛📛📛📛📛📛");
console.log(result1);
console.log("📛📛📛📛📛📛 result2 📛📛📛📛📛📛");
console.log(result2);
