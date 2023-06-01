/**
 *
 * 🫒 Title : Write file
 * 🫒 Description : Write file using fs module in nodejs
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

const fs = require("fs");

fs.writeFile("Demo.txt", "This is a Demo text", (err) => {
  err ? console.log(err) : console.log("Success");
});

fs.writeFile("Demo.txt", "This is a Demo text injected later", (err) => {
  err ? console.log(err) : console.log("Success");
});
