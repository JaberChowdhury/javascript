/**
 *
 * 🫒 Title : add user
 * 🫒 Description : adding user to the database
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 6 July 2023
 *
 **/

// Dependency
const userRoute = require("../../route/user.route.js");
const fs = require("fs");
const path = require("path");
const checkuuid = require("../checkuuid.js");

// addUser function
const addUser = (req, res) => {
  // destructuring the req.body
  const { firstName, lastName, age, uuid } = req.body;

  // the filename
  const filename = path.dirname(__dirname).slice(0, -7) + "/db/users/main.json";

  // read the database
  fs.readFile(filename, (err, buffer) => {
    if (!err) {
      // buffer -> JSON -> Object
      const usersObj = JSON.parse(buffer.toString());
      if (!checkuuid(usersObj, uuid)) {
        usersObj.body.users.push({
          uuid,
          time: new Date().toLocaleString(),
          firstName,
          lastName,
          age,
        });

        // write the database  --updating the database
        fs.writeFile(filename, JSON.stringify(usersObj), (error) => {
          if (!error) {
            console.log(`A user called ${firstName} added in the database`);

            // sending the response as a json with a custom message
            res.json({
              message: `A user called ${firstName} added in the database`,
              uuid,
              time: new Date().toLocaleString(),
              firstName,
              lastName,
              age,
            });
          } else {
            console.log(error);
          }
        });
      } else {
        res.send(
          `We already have the same user in our database uuid:--${uuid}`,
        );
      }
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

module.exports = addUser;
