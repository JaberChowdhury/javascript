/**
 *
 * 🫒 Title : Append inside file
 * 🫒 Description : Append data inside a file
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

// Dependencies
const fs = require("fs");

// Create e file
fs.writeFile("Hello.txt", "I am 1st sentence", (err) => {
  err ? console.log(err) : console.log("Successfull");
});

// Append another text
fs.appendFile("Hello.txt", "I am 2nd sentence", (err) => {
  err ? console.log(err) : console.log("Successfull");
});
