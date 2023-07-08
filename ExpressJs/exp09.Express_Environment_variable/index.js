/**
 *
 * 🫒 Title : environment variable
 * 🫒 Description : using environment variable
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 08 July 2023
 *
 **/

// Dependency
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is successfully running at port ${PORT}`);
});
