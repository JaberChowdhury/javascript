/**
 *
 * 🫒 Title : My code base
 * 🫒 Description : code Description
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 06 July 2023
 *
 **/

// Dependency
const fs = require("fs");

const getTodos = (req, res) => {
  const fileName = __dirname.slice(0, -11) + "models/todos.json";
  fs.readFile(fileName, (error, buffer) => {
    if (!error) {
      const database = JSON.parse(buffer.toString());
      console.log(`Sended the full database at ${new Date().toLocaleString()}`);
      res.json({
        database,
        totalLength: database.body.todos.length,
        lastAddedAt: database.body.todos.reverse()[0].time,
      });
    } else {
      res.json({
        message: "can't read the database",
        error,
      });
    }
  });
};

module.exports = getTodos;
