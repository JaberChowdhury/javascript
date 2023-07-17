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
  const fileName = __dirname.slice(0, -11) + "models/todos.json.txt";
  fs.readFile(fileName, (error, buffer) => {
    if (!error) {
      const database = JSON.parse(buffer.toString());
      console.log({
        message: `Sended the todos at ${new Date().toLocaleString()}`,
      });
      const todos = database.body.todos;
      const todosLength = database.body.todos.length;
      res.json({
        totalLength: todosLength,
        lastAddedAt:
          todosLength !== 0 ? database.body.todos.reverse()[0].time : 0,
        todos,
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
