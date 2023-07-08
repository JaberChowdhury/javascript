/**
 *
 * 🫒 Title : handleArea
 * 🫒 Description : Calculate the area
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 06 July 2023
 *
 **/

// Dependency
const responsePage = require("../responsePage.js");

const handleArea = (req, res) => {
  // destructuring the body
  const { width, height } = req.body;
  console.log(req.body);
  res.statusCode = 400;
  const result = (width * height).toString();
  res.send(responsePage(result));
};

module.exports = handleArea;
