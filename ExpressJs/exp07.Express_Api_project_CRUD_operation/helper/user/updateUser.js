/**
 *
 * 🫒 Title : update user info
 * 🫒 Description : updating user information on put request
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 6 July 2023
 *
 **/

// Dependency
const userRoute = require("../../route/user.route.js");
const fs = require("fs");
const path = require("path");

const updateUser = (req, res) => {
  // destructuring req.body
  const { firstName, lastName, age, uuid } = req.body;

  // creating filename
  const filename = path.dirname(__dirname).slice(0, -7) + "/db/users/main.json";
  // read the database
  fs.readFile(filename, (err, buffer) => {
    if (!err) {
      // buffer -> json -> Object
      const usersObj = JSON.parse(buffer.toString());

      //search the database
      const users = usersObj.body.users;
      const check = users.filter((user, id) => {
        return user.uuid === uuid;
      });
      // check the user
      if (check.length !== 0) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].uuid === uuid) {
            users[i].firstName = firstName;
            users[i].lastName = lastName;
            users[i].age = age;
          }
        }
        // update the database
        fs.writeFile(filename, JSON.stringify(usersObj), (error) => {
          if (!error) {
            res.send(`You have successfully update the user information `);
          } else {
            res.json({
              error,
            });
          }
        });
      } else {
        res.send(`User with uuid:--- ${uuid} didn't found in our database`);
      }
    } else {
      // sending the error as json
      res.json(
        JSON.stringify({
          err,
        }),
      );
    }
  });
};

module.exports = updateUser;
