/**
 *
 * 🫒 Title : countDuplicates
 * 🫒 Description : find duplicate value and add them in object
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 19 July 2023
 *
 **/

const input = [..."🍇🍈🍐🫒🫒🌶🍇🍐🥕🧄🥦🍒🍒"];

const countDuplicates = (data) => {
  let output = {};
  data.map((d) => {
    output[d] = (output[d] || 0) + 1;
  });
  return output;
};

console.log(countDuplicates(input));
