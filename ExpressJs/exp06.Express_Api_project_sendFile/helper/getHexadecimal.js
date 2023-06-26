/**
 *
 * 🫒 Title : generating multiple hexadecimal
 * 🫒 Description : generating multiple hexadecimal based on query parameters
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 25 June 2023
 *
 **/

// Dependency
const useHexadecimal = require("./useHexadecimal.js");

// exported function
const getHexadecimal = (count = 10) => {
  if (count < 10000) {
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push(useHexadecimal());
    }
    const final = {
      title: "This is an array of hexadecimal color code",
      description:
        "This data is generated in server based on user request the default query parameter is 10",
      date_time: new Date().toLocaleString(),
      totalLength: count,
      color: data,
    };
    return final;
  } else {
    const final = {
      title: "This is an array of hexadecimal color code",
      description: `You are requesting ${count} color code but we can't provide more than 10000 color code for our cpu shortage `,
      date_time: new Date().toLocaleString(),
      totalLength: null,
      color: null,
    };
    return final;
  }
};

module.exports = getHexadecimal;
