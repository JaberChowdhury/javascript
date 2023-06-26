/**
 *
 * 🫒 Title : expressjs
 * 🫒 Description : a simple nodejs server made with expressjs
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 26 June 2023
 *
 **/

// Dependency
const express = require("express");
const useColor = require("./router/color.route.js");
const useDummy = require("./router/dummy.route.js");

const app = express();
const port = 5173;

app.use("/api/color/", useColor);
app.use("/api/user/", useDummy);

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/view/home.html");
});

app.use((req, res) => {
  res.send("Wrong url hit!!! ");
});

app.listen(port, () => {
  console.log(`App is successfully running at port : ${port}`);
});
