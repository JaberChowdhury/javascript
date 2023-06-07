/**
 *
 * 🫒 Title : Server
 * 🫒 Description : a complex server
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 2 June 2023
 *
 **/
const d1 = new Date().getTime();
// Dependency
const http = require("http");
const data = require("./db/DataGenerator");
const url = require("url");

// module scaffolding
const app = {};

// state
app.state = {
  responseData: {},
};

// Configuration
app.config = {
  port: 5173,
};

// create server
app.createServer = () => {
  const myServer = http.createServer(app.handleServer);
  myServer.listen(app.config.port, () => {
    console.log(`App successfully running at ${app.config.port}`);
  });
};

// handle server
app.handleServer = (req, res) => {
  const parsedUrl = url.parse(req.url, app.queryString);
  const { search, query, pathname, path, href } = parsedUrl;
  handleRoute(search, query, pathname, path, href);
  res.end(JSON.stringify(app.state.responseData));
};

const handleRoute = (search, query, path, pathname, href) => {
  const route = path.toString().split("/")[1];
  const length = query?.split("=")[1] || 10;

  if (route.toLowerCase() === "color") {
    app.state.responseData = data(length);
  }

  console.log("Path------------:" + path);
  console.log("Route-----------:" + route);
  console.log("PathName--------:" + pathname);
  console.log("Query-----------:" + query);
  console.log("Total Length----:" + length);
};

// start the server
app.createServer();
