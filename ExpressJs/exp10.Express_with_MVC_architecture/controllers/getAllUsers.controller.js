/**
 *
 * 🫒 Title : all users
 * 🫒 Description : send all users
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 13 July 2023
 *
 **/
// Dependency
const fs = require("fs");

const getAllUsers = (req, res) => {
  const fileName = __dirname.slice(0, -11) + "models/users.json";
  fs.readFile(fileName, (error, buffer) => {
    if (!error) {
      const mainObj = JSON.parse(buffer.toString());
      const users = mainObj.body.users;
      res.json({
        msg: "here's the users",
        users,
      });
    } else {
      res.json({
        msg: "can't read file",
        error,
      });
    }
  });
};

module.exports = getAllUsers;
