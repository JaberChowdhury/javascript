/**
 *
 * 🫒 Title : express.json()
 * 🫒 Description : A simple express server and it's express.json() uses
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 23 June 2023
 *
 **/

// Dependency
const express = require("express");

// App Object
const app = express();

// using express.json() to ensure post method type
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Wow we got a hit on home route");
  res.send("Wow you hit on home route");
});

app.get("/user", (req, res) => {
  console.log("Wow we got a hit on user route");
  res.send("Wow you hit on user route");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("you hit on home route using post method");
});

app.listen(5173, () => {
  console.log("App successfully running at port ```5173```");
});
