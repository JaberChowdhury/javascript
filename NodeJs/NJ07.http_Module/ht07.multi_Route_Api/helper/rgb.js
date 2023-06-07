/**
 *
 * 🫒 Title : RGB color
 * 🫒 Description : generating rgb color
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 7 June 2023
 *
 **/

// Dependency

// module scaffolding
const app = {};

// Configuration
app.config = {
  validator: true,
};

// Validator
app.validator = (num) => {
  if (app.config.validator) {
    if (num.toString().length === 2) {
      return `0${num}`;
    } else if (num.toString().length === 1) {
      return `00${num}`;
    } else {
      return num;
    }
  } else {
    return num;
  }
};

// generate rgb color code
app.rgbColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${app.validator(r)},${app.validator(g)},${app.validator(b)})`;
};

// export the module
module.exports = app.rgbColor;
