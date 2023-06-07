/**
 *
 * 🫒 Title : hexadecimalResponse Route
 * 🫒 Description : sending hexadecimalResponse
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 7 June 2023
 *
 **/

// Dependecies
const hexadecimalColor = require("../helper/hexadecimal");

// module scaffolding
const app = {};

// configuration
app.config = {};

// create the hexadecimal generator
app.hexadecimalArray = (len = 1) => {
  let finalBlock = [];
  for (let i = 0; i < len; i++) {
    finalBlock.push(hexadecimalColor());
  }
  console.log("\x1b[35m%s\x1b[0m", "hexadecimalArray generated");
  return finalBlock;
};

// hexadecimalResponse function
app.hexadecimalResponse = (len = 10) => {
  const data = {
    head: {
      title: "This is color Route",
      description: "All our available color formates and features",
    },
    body: {
      "Content-type": "Application/Json",
      status: 200,
      hexadecimal: app.hexadecimalArray(len),
    },
  };
  return data;
};

// export the module
module.exports = app.hexadecimalResponse;
