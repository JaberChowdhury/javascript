/**
 *
 * 🫒 Title : deleteUser
 * 🫒 Description : deleting the user from database
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 6 July 2023
 *
 **/

// Dependency
const userRoute = require("../../route/user.route.js");
const fs = require("fs");
const path = require("path");

const deleteUser = (req, res) => {
  // destructuring req.body
  const { uuid } = req.body;

  // making filename
  const filename = path.dirname(__dirname).slice(0, -7) + "/db/users/main.json";

  // read the database
  fs.readFile(filename, (err, buffer) => {
    if (!err) {
      // buffer -> JSON -> Object
      const usersObj = JSON.parse(buffer.toString());

      // searching the user in database
      const check = usersObj.body.users.filter((user, id) => {
        return user.uuid === uuid;
      });
      // checking the user exists or not
      if (check.length !== 0) {
        // filter the new array
        const newUsers = usersObj.body.users.filter((user, id) => {
          return user.uuid !== uuid;
        });
        // updating the users array
        usersObj.body.users = newUsers;

        // updating the database
        fs.writeFile(filename, JSON.stringify(usersObj), (error) => {
          if (!error) {
            console.log(`A user with uuid:--- ${uuid} deleted the database`);
            res.send(`A user with uuid:--- ${uuid} deleted the database`);
          } else {
            console.log(error);
          }
        });
        // if the user doesn't exist than we can't delete him/her
      } else {
        res.send(`User with uuid:--- ${uuid} didn't found`);
      }
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

module.exports = deleteUser;
