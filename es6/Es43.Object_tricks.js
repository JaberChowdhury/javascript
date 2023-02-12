const workingDay = 120;
const perDayMoney = 1000;
const income = workingDay * perDayMoney;

const person = {
  name: "Md jaber Chowdhury",
  age: 21,
  skill: ["Html", "css", "js", "tailwind", "reactjs", "linux"],
  workingDay,
  perDayMoney,
  income,
};

const key = Object.keys(person);
const value = Object.values(person);
const entrie = Object.entries(person);

console.log("📛📛📛📛📛📛 Object.keys() 📛📛📛📛📛📛");
console.log(key);
console.log("📛📛📛📛📛📛 Object.values() 📛📛📛📛📛📛");
console.log(value);
console.log("📛📛📛📛📛📛 Object.entries() 📛📛📛📛📛📛");
console.log(entrie);
