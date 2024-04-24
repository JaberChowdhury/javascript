/**
 *
 * 🫒 Title : MVC -architecture
 * 🫒 Description : Model View Controller example with simple project
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 12 July 2023
 *
 **/

// Dependency
const express = require("express");
require("dotenv").config();
const formRouter = require("./routes/form.route.js");

// initial variable
const PORT = process.env.PORT || 4000;
const app = express();

// enabling body object
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use("/form", formRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.use((req, res) => {
  res.send("no route found");
});

app.listen(PORT, () => {
  console.log(`App is successfully running at port: ${PORT}`);
});
