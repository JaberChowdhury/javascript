/**
 *
 * 🫒 Title : color Route
 * 🫒 Description : sending color
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 7 June 2023
 *
 **/

// Dependecies
const hexadecimalColor = require("../helper/hexadecimal");
const rgbColor = require("../helper/rgb");

// module scaffolding
const app = {};

// configuration
app.config = {
  arrayLength: 20,
};

// create the hexadecimal generator
app.hexadecimalArray = (len = 1) => {
  let finalBlock = [];
  for (let i = 0; i < len; i++) {
    finalBlock.push(hexadecimalColor());
  }
  console.log("\x1b[35m%s\x1b[0m", "hexadecimalArray generated");
  return finalBlock;
};

// create the rgb generator
app.rgbArray = (len = 1) => {
  let finalBlock = [];
  for (let i = 0; i < len; i++) {
    finalBlock.push(rgbColor());
  }
  console.log("\x1b[35m%s\x1b[0m", "rgbArray generated");
  return finalBlock;
};

// Color function
app.color = () => {
  const data = {
    head: {
      title: "This is color Route",
      description: "All our available color formates and features",
    },
    body: {
      "Content-type": "Application/Json",
      status: 200,
      hexadecimal: app.hexadecimalArray(app.config.arrayLength),
      rgb: app.rgbArray(app.config.arrayLength),
    },
  };
  return data;
};

// export the module
module.exports = app.color;
