/**
 *
 * 🫒 Title : calculator route
 * 🫒 Description : handling all route from calculator
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 06 July 2023
 *
 **/

// Dependency
const express = require("express");
const calculator = express.Router();
const chalk = require("chalk");
const handleArea = require("../helper/calculator/handleArea.js");
const handleTriangle = require("../helper/calculator/handleTriangle.js");

calculator.get("/", (req, res) => {
  console.log(chalk.bgGreen.black("We got hit on /calculator"));
  const filename = __dirname.slice(0, -6) + "/html/home.html";
  res.sendFile(filename);
});

calculator.get("/area", (req, res) => {
  const filename = __dirname.slice(0, -6) + "/html/area.html";
  console.log(chalk.bgGreen.black("Area.html has been sended"));
  res.sendFile(filename);
});

calculator.get("/triangle", (req, res) => {
  const filename = __dirname.slice(0, -6) + "/html/triangle.html";
  console.log(chalk.bgGreen.black("triangle.html has been sended"));
  res.sendFile(filename);
});

calculator.post("/area", handleArea);
calculator.post("/triangle", handleTriangle);

module.exports = calculator;
