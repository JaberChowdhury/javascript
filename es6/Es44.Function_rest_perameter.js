function argExample() {
  console.log(arguments);
}
console.log("📛📛📛📛📛 old function 📛📛📛📛📛");
argExample(8, 6, 8); // [Arguments] { '0': 8, '1': 6, '2': 8 }

const argExample2 = () => {
  console.log(arguments);
};
console.log("📛📛📛📛📛 fat arrow function 📛📛📛📛📛");
argExample2(7, 7, 88, 8, 8); // weird

/*
rest parameter example 
*/

const result = (a, b, c, ...perams) => {
  console.log(perams);
};
console.log("📛📛📛📛📛 rest parameters 📛📛📛📛📛");
result(90, 58, 688, 78, 8, 87, 8, 6, 67, 79, 7);

/*

if we use multiple  parameters  we can't use res parameters at first 
rest parameters must be at the last position

*/
