/**
 *
 * 🫒 Title : basic curd app
 * 🫒 Description : a CURD application made with expressjs
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 3 July 2023
 *
 **/

// Dependency
const express = require("express");
const userRoute = require("./route/user.route.js");

// Our App object
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded());

// handling all user route
app.use("/users", userRoute);

// our home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/home.html");
});

// handling wrong request
app.use((req, res) => res.send("Wow bro hit in wrong place"));

// listening the request
app.listen(5173, () => console.log("App is successfully running at port 5173"));
