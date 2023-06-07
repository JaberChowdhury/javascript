/**
 *
 * 🫒 Title : hexadecimalResponse Route
 * 🫒 Description : sending hexadecimalResponse
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 7 June 2023
 *
 **/

// Dependecies
const rgbColor = require("../helper/rgb");

// module scaffolding
const app = {};

// configuration
app.config = {};

// create the rgb generator
app.rgbArray = (len = 1) => {
  let finalBlock = [];
  for (let i = 0; i < len; i++) {
    finalBlock.push(rgbColor());
  }
  console.log("\x1b[35m%s\x1b[0m", "rgbArray generated");
  return finalBlock;
};

// hexadecimalResponse function
app.rgbResponse = (len = 10) => {
  const data = {
    head: {
      title: "This is color Route",
      description: "All our available color formates and features",
    },
    body: {
      "Content-type": "Application/Json",
      status: 200,
      rgb: app.rgbArray(len),
    },
  };
  return data;
};

// export the module
module.exports = app.rgbResponse;
