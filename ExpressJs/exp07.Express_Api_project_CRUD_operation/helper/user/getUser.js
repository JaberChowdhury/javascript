/**
 *
 * 🫒 Title : sending users
 * 🫒 Description : sending all users information together
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 6 July 2023
 *
 **/

// Dependency
const userRoute = require("../../route/user.route.js");
const fs = require("fs");
const path = require("path");

const getUser = (req, res) => {
  const filename = path.dirname(__dirname).slice(0, -7) + "/db/users/main.json";
  fs.readFile(filename, (error, buffer) => {
    if (!error) {
      const current = JSON.parse(buffer.toString());
      const database = current;
      const usersLength = database.body.users.length;
      database.head.sendingTime = new Date().toLocaleString();
      database.body.allUuid = [];
      database.body.allAges = [];
      for (let i = 0; i < usersLength; i++) {
        database.body.allUuid.push(database.body.users[i].uuid);
        database.body.allAges.push(database.body.users[i].age);
      }
      res.json({
        database,
      });
    } else {
      console.log(error);
      res.json(
        JSON.parse({
          error,
        }),
      );
    }
  });
};

module.exports = getUser;
