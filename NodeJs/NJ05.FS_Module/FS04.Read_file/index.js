/**
 *
 * 🫒 Title : Read file
 * 🫒 Description : Read file using nodejs fs module
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

// Depemdecies
const fs = require("fs");

// create a file
fs.writeFile("A_New_File.txt", "hello new file", (err) => {
  err ? console.log(err) : console.log("Successfully created");
});

// read file
fs.readFile("A_New_File.txt", "utf-8", (err, data) => {
  err ? console.log(err) : console.log(data);
});
