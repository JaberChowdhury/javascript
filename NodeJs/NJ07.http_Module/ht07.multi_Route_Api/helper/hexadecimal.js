/**
 *
 * 🫒 Title : Hexadecimal color
 * 🫒 Description : generating hexadecimal color
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 7 June 2023
 *
 **/

// Dependency

// module scaffolding
const app = {};

// Configuration
app.config = {};

// hexadecimal code
app.code = [..."0123456789abcdef"];

// generate hexadecimal color code
app.hexadecimalColor = () => {
  let final = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * app.code.length);
    final += app.code[randomNumber];
  }
  return final;
};

// export the module
module.exports = app.hexadecimalColor;
