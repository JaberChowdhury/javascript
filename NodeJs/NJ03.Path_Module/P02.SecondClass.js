/**
 *
 * 🫒 Title : Simple Operations
 * 🫒 Description : Difference between path module and global modules feature
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

const path = require("path");

console.log(__dirname);
console.log(path.dirname(__dirname));
console.log(path.basename(__filename));
