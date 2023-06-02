/**
 *
 * 🫒 Title : Handling requests
 * 🫒 Description :Handling other requests like eg: get,post,put,delete
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 2 June 2023
 *
 **/

// Dependencies
const http = require("http");
const { StringDecoder } = require("string_decoder");

// Module scaffolding
const app = {};

// Configuration
app.config = {
  port: 5173,
  queryString: true,
};

// Create the server
app.createServer = () => {
  const myserver = http.createServer(app.handleServer);
  myserver.listen(app.config.port, () => {
    console.log(`App successfully running on PORT ${app.config.port}`);
  });
};

// Handling the server request and response
app.handleServer = (req, res) => {
  console.log(req.url);

  const headerObject = req.headers;

  console.log("🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒🫒");
  console.log(headerObject);

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end(JSON.stringify("thanks for coming here"));
  });
};

// starting the server
app.createServer();
