/**
 *
 * 🫒 Title : a simple server
 * 🫒 Description : detecting the route using nodejs server
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

// Dependecies
const http = require("http");
const url = require("url");
const data = require("./Data");

// Module scaffolding
const app = {};

// Configuration
app.config = {
  port: 5173,
  queryString: true,
};

// Create server
app.server = () => {
  const myServer = http.createServer(app.handleServer);
  myServer.listen(app.config.port, () => {
    console.log(`Server running at port ${app.config.port}`);
  });
};

// handling server
app.handleServer = (req, res) => {
  // get the url and parse it
  const parsedUrl = url.parse(req.url, app.queryString);

  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method;

  console.log({
    path,
    trimedPath,
    method,
  });

  /*
  console.log("Headers---" + JSON.stringify(req.headers));
  console.log("search---" + parsedUrl.search);
  console.log("query---" + parsedUrl.query);
  console.log("pathname---" + parsedUrl.pathname);
  console.log("path---" + parsedUrl.path);
  console.log("href---" + parsedUrl.href);
  console.log("url------" + req.url);
  console.log("methid---" + req.method);
  */

  // send user response
  res.end(JSON.stringify(data));
};

// start the server
app.server();
