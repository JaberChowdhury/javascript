/**
 *
 * 🫒 Title : Nodejs server
 * 🫒 Description : A multi route nodejs server
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 7 June 2023
 *
 **/

// Dependecies
const http = require("http");
const colors = require("colors");
const url = require("url");
const handleRoutes = require("./handleRoute");

// Module scaffolding
const app = {};

// Configuration
app.config = {
  port: 5173,
};

// Create Server
app.createServer = () => {
  const myServer = http.createServer(app.handleServer);
  myServer.listen(app.config.port, () => {
    console.log(`App successfully running at port: ${app.config.port}`);
  });
};

// handle The server
app.handleServer = (req, res) => {
  const path = url.parse(req.url, true).pathname;
  const query = url.parse(req.url, true).query;
  console.log(query);

  const trimedPath = path.replace(/^\/+|\/+$/g, "");
  const x = handleRoutes({
    routes: trimedPath.split("/"),
    query,
  });

  res.end(JSON.stringify(x));
};

// Start the server
app.createServer();
