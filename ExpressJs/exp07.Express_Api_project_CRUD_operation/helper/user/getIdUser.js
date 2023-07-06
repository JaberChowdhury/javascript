/**
 *
 * 🫒 Title : specific user
 * 🫒 Description : sending specific user information based on uuid
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 6 July 2023
 *
 **/

// Dependency
const userRoute = require("../../route/user.route.js");
const fs = require("fs");
const path = require("path");

const getIdUser = (req, res) => {
  // get the id
  const { id } = req.params;
  // make the filename
  const filename = path.dirname(__dirname).slice(0, -7) + "/db/users/main.json";

  // read the database
  fs.readFile(filename, (error, buffer) => {
    if (!error) {
      const usersObj = JSON.parse(buffer.toString());
      const totalLength = usersObj.body.users.length;
      if (id <= totalLength) {
        res.json(usersObj.body.users[id]);
      } else {
        res.json({
          id,
          totalLength,
        });
      }
    } else {
      res.json({
        error,
      });
    }
  });
};

module.exports = getIdUser;
