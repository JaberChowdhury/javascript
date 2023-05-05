// let's  learn array destructuring

const arrValue = [12, 34, 78];
const [a, b, c] = arrValue;
console.log(a);
console.log(b);
console.log(c);

// ignore values

const userNames = ["Abdullah", "Jaber", "Mohammad", "Faizul"];
const [x, , , z] = userNames;
console.log(x);
console.log(z);

// swap variable

let text1 = "1st position";
let text2 = "2nd position";
[text1, text2] = [text2, text1];
console.log(text1);
console.log(text2);
