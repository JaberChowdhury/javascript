// Array Elements Can Be Objects
const myf = () => {
  for (let i = 0; i < 4; i++) {
    console.log(i);
  }
};
const array4 = [
  myf(), //undefined
  myf,
  "Bangladesh",
  100,
  "😂",
  " ",
];
console.log(array4);
console.log("😀😀😀😀😀😀😀");

const array5 = ["hahah", 102, "🤫"];
const array6 = [array4, array5];
console.log(array6);
console.log(array6.length); // 2
