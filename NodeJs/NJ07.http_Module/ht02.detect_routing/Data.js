/**
 *
 * 🫒 Title : making data
 * 🫒 Description : creating data for api that I created
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

const Hexadecimal = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

let color = [];
for (let i = 0; i < 100; i++) {
  color.push(Hexadecimal());
}

const myData = {
  text: "Hoo vai amii ekta data",
  color,
};

module.exports = myData;
