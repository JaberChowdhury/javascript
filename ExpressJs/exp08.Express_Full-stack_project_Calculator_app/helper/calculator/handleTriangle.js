/**
 *
 * 🫒 Title : handleTriangle
 * 🫒 Description : Calculate the Triangle
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 08 July 2023
 *
 **/

// Dependency
const responsePage = require("../responsePage.js");

const handleTriangle = (req, res) => {
  // destructuring the body
  const { height, base } = req.body;
  console.log(req.body);
  res.statusCode = 400;
  const result = (0.5 * base * height).toString();
  res.send(responsePage(result));
};

module.exports = handleTriangle;
