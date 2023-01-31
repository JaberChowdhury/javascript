// we can make a simple if else statement and that is ternary operator

// regular methods
let a = 40;
if (a > 33) {
  console.log("A is greatwr than 33");
} else {
  console.log("statement doesn't match");
}

// ternary operator

let input = 20;
let result = input > 20 ? "Greater than 20" : "less than 20";
console.log(result);

// example with multiple statement

let final =
  input > 10
    ? "Greater than 10"
    : input < 10
    ? "less than 10"
    : "statement doesn't match";
console.log(final);
