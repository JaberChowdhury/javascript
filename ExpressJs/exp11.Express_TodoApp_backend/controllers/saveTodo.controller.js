/**
 *
 * 🫒 Title : saveTodo
 * 🫒 Description : handling saveTodo
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 13 July 2023
 *
 **/

// Dependency
const fs = require("fs");

const saveTodo = (req, res) => {
  const fileName = __dirname.slice(0, -11) + "models/todos.json";
  // read the database
  fs.readFile(fileName, (readError, buffer) => {
    if (!readError) {
      const database = JSON.parse(buffer.toString());
      const todos = database.body.todos;
      const newTodo = {
        uuid: crypto.randomUUID(),
        time: new Date().toLocaleString(),
        updated: new Date().toLocaleString(),
        title: req.body.title || "no title",
        description: req.body.description || "no description",
        checked: req.body.checked || "false",
      };
      todos.push(newTodo);
      // write the file
      fs.writeFile(fileName, JSON.stringify(database), (writeError) => {
        if (!writeError) {
          // final success 🙌
          res.json({
            message: "todo has been saved",
            newTodo,
          });
        } else {
          res.json({
            message: "can't write the database",
            writeError,
          });
        }
      });
    } else {
      res.json({
        message: "can't read the database",
        readError,
      });
    }
  });
};

module.exports = saveTodo;
