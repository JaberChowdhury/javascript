/**
 *
 * 🫒 Title : Routes
 * 🫒 Description : Handling every route here
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 7 June 2023
 *
 **/

// Dependencies
const color = require("./Routes/color");
const hexadecimalResponse = require("./Routes/hexadecimalResponse");
const rgbResponse = require("./Routes/rgbResponse");

// module scaffolding
const app = {};

// configuration
app.config = {};

app.handleRoutes = ({ routes = null, query = null }) => {
  if (routes[0] === "color") {
    return color();
  } else if (routes[0] === "hexadecimal" && query !== null) {
    return hexadecimalResponse(query.length);
  } else if (routes[0] === "hexadecimal") {
    return hexadecimalResponse();
  } else if (routes[0] === "rgb" && query !== null) {
    return rgbResponse(query.length);
  } else if (routes[0] === "rgb") {
    return rgbResponse();
  } else {
    return `You hit on wrong Route,we don't have any data at ${routes[0]}`;
  }
};

module.exports = app.handleRoutes;
