/**
 *
 * 🫒 Title : http server
 * 🫒 Description : this is a basic http server made on nodejs http module
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 1 June 2023
 *
 **/

// Dependencies
const http = require("http");

// App object - module scaffolding
const app = {};

// Configuration
app.config = {
  port: 3000,
};

// Create the server
const server = http.createServer((req, res) => {
  res.end("I am a server from nodejs");
});

server.listen(app.config.port, () => {
  console.log(`Server running at ${app.config.port}`);
});
