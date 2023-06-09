/**
 *
 * 🫒 Title : app section
 * 🫒 Description : we will handle routes here
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 9 June 2023
 *
 **/

// Dependency
const express = require("express");
const colors = require("colors");

// app object
const app = express();

// handle get request on home route
app.get("/", (req, res) => {
  console.log("you hit on home route".blue.inverse);
  res.send("you hit on home route");
  res.end();
});

// handle get request on about route
app.get("/about", (req, res) => {
  console.log("you hit on about route".green.inverse);
  res.send("you hit on about route");
  res.end();
});

// handle post request on home route
app.post("/", (req, res) => {
  console.log("you made a post request on home route".cyan.inverse);
  res.send("you made a post request on home route");
  res.end();
});

// handle put request on home route
app.put("/", (req, res) => {
  console.log("you made a put request on home route".cyan.inverse);
  res.send("you made a put request on home route");
  res.end();
});

// handle delete request on home route
app.delete("/", (req, res) => {
  console.log("you made a delete request on home route".cyan.inverse);
  res.send("you made a delete request on home route");
  res.end();
});

module.exports = app;
