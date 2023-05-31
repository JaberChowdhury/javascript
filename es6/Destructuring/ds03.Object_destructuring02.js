const person = () => {
  return null;
};
const { fName, lName } = person() || {};
console.log(fName); // undefined
console.log(lName); // undefined

const member = () => {
  return {
    id: 01,
    name: {
      firstName: "Mohammad",
      lastName: "Chowdhury",
    },
  };
};

const {
  name: { firstName, lastName, midd = "none" },
} = member();

console.log(firstName);
console.log(lastName);
console.log(midd);
p0;
