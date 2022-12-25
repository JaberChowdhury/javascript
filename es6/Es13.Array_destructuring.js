// Array destructuring 

const array = [12, 76, 8, 5, 88, 5, 875, 77, 777, 7, 88];

const [num1, num2, num3, num4, ...z] = array; // z will return an array
console.log(num1); // 12
console.log(num2); // 76
console.log(num3); // 8
console.log(z); // Everything after num4

// this is called array destructuring :)