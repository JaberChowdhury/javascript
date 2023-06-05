/**
 *
 * 🫒 Title : Generate Html
 * 🫒 Description : generate a htmlbfile based on query string
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 5 June 2023
 *
 **/

// Dependency
const http = require("http");
const fs = require("fs");
const url = require("url");
const data = require("./helper/GenerateHtml");

// module scaffolding
const app = {};

// Configuration
app.config = {
  port: 5173,
  isQueryString: true,
};

// create Server
app.createServer = () => {
  const myServer = http.createServer(app.handleServer);
  myServer.listen(app.config.port, () => {
    console.log(`App successfully running at port: ${app.config.port}`);
  });
};

// handle server
app.handleServer = (req, res) => {
  const querys = url.parse(req.url, app.config.isQueryString).query;
  // create html file
  const finalData = data(querys.length);

  console.log("🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒");
  console.log(`Querys---------: ${querys.length}`);
  console.log("Data served successfully ✅️");
  console.log("🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒");

  res.end(finalData);
};

// Start server
app.createServer();
