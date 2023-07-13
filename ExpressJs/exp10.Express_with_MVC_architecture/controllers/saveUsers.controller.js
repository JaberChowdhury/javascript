/**
 *
 * 🫒 Title : form handling
 * 🫒 Description : handling form route on post request
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 12 July 2023
 *
 **/
// Dependency
const fs = require("fs");

const saveUsers = (req, res) => {
  const { name, email } = req.body;
  const fileName = __dirname.slice(0, -11) + "models/users.json";
  console.log(fileName);
  fs.readFile(fileName, (err, buffer) => {
    if (!err) {
      const mainObj = JSON.parse(buffer.toString());
      const users = mainObj.body.users;
      const newUser = {
        uuid: crypto.randomUUID(),
        updated: new Date().toLocaleString(),
        name,
        email,
      };
      users.push(newUser);
      fs.writeFile(fileName, JSON.stringify(mainObj), (error) => {
        if (!error) {
          res.json(newUser);
        } else {
          res.json({
            msg: "can't write file",
            error,
          });
        }
      });
    } else {
      res.json({
        msg: "can't read file",
        err,
      });
    }
  });
};

module.exports = saveUsers;
