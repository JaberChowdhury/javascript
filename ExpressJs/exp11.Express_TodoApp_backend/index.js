/**
 *
 * 🫒 Title : Todo app
 * 🫒 Description : Todo app backEnd
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 13 July 2023
 *
 **/

// Dependency
const express = require("express");
const cors = require("cors");
const todoRoute = require("./routes/todo.route.js");
const error = require("./views/error.view.js");

// initial
const app = express();
const PORT = 4000;
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1/todo", todoRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// serve the css file
app.get("/api/v4/css", (req, res) => {
  console.log("Css has been served", new Date().toLocaleString());
  res.sendFile(__dirname + "/views/style.css");
});

// unavailable routes
app.use((req, res) => {
  res.send(
    error(
      `Route didn't found. || http://localhost:3000${req.path} || doesn't exist`
    )
  );
});

app.listen(PORT, () => {
  console.log(`App is successfully running at port : ${PORT}`);
});
