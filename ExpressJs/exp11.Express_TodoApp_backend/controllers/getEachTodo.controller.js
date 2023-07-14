/**
 *
 * 🫒 Title :  getEachTodo
 * 🫒 Description : send one todo based on user requests
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 13 July 2023
 *
 **/

// Dependency
const fs = require("fs");

const getEachTodo = (req, res) => {
  const fileName = __dirname.slice(0, -11) + "models/todos.json";
  // Read the database
  fs.readFile(fileName, (error, buffer) => {
    if (!error) {
      const database = JSON.parse(buffer.toString());
      const todos = database.body.todos;
      if (todos.length > Number(req.params.id)) {
        res.json({
          todo: todos[req.params.id],
        });
      } else {
        res.send(`Sorry ${req.params.id} todo doesn't exist`);
      }
    } else {
      res.json({
        message: "can't read the database",
        error,
      });
    }
  });
};

module.exports = getEachTodo;
