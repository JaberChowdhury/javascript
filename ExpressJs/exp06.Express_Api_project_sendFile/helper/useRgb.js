/**
 *
 * 🫒 Title : generating rgb color
 * 🫒 Description : generating rgb color for user
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 25 June 2023
 *
 **/

// validation for 3 digit code
const validation = (number) => {
  const nl = number.toString().length;
  if (nl < 2 && nl === 1) {
    return `00${number}`;
  }
  if (nl === 2) {
    return `0${number}`;
  }
  return number;
};

// exported function
const useRgb = () => {
  const r = validation(Math.floor(Math.random() * 255));
  const r1 = validation(255 - parseFloat(r));
  const g = validation(Math.floor(Math.random() * 255));
  const g1 = validation(255 - parseFloat(g));
  const b = validation(Math.floor(Math.random() * 255));
  const b1 = validation(255 - parseFloat(b));
  return {
    original: `rgb(${r},${g},${b})`,
    oposite: `rgb(${r1},${g1},${b1})`,
  };
};

module.exports = useRgb;
