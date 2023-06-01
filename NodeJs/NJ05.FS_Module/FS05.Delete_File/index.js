/**
 *
 * 🫒 Title : Delete file
 * 🫒 Description : Delete the file using Nodejs fs module
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

// Dependecies
const fs = require("fs");

// Create a file
fs.writeFile("Demo.txt", "This is a demo file", (err) => {
  err ? console.log(err) : console.log("Successfully created");
});

// Delete file
fs.unlink("Demo.txt", (err) => {
  err ? console.log(err) : console.log("Successfully Deleted");
});

// Output !!!
/*

╰─❯ node index.js
Successfully Deleted
Successfully created

*/
