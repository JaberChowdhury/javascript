/**
 *
 * 🫒 Title : Calculator Project
 * 🫒 Description : Calculate mathematical equation
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 06 July 2023
 *
 **/

// Dependency
const express = require("express");
const chalk = require("chalk");
// const morgan = require("morgan");
const calculator = require(__dirname + "/route/calculator.route.js");

const app = express();
const PORT = 5173;
app.use(express.json());
// app.use(morgan());
app.use(express.urlencoded());

app.use("/calculator", calculator);

app.get("/", (req, res) => {
  console.log(chalk.bgGreen.black("we got hit on home route"));
  res.sendFile(__dirname + "/html/home.html");
});

app.use((req, res) => {
  console.log(chalk.bgRed.black(`You hit on wrong route ${req.path}`));
  res.send(`You hit on wrong route ${req.path}`);
});

app.listen(PORT, () => {
  console.log(
    chalk.bgYellow.black(
      ` App is successfully running at port ${chalk.bgGreen(PORT)} `
    )
  );
});
