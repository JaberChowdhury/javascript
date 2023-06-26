/**
 *
 * 🫒 Title : generating hexadecimal
 * 🫒 Description : generating  hexadecimal for user
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 25 June 2023
 *
 **/

// exported function
const useHexadecimal = () => {
  const code = [..."0123456789abcdef"];
  let color1 = "#";
  let color2 = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * code.length);
    let digit1 = code[random];
    let digit2 = code.reverse()[random];
    color1 += digit1;
    color2 += digit2;
  }
  return {
    original: color1,
    oposite: color2,
  };
};

module.exports = useHexadecimal;
