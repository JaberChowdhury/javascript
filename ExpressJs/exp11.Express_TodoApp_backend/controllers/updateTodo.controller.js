/**
 *
 * 🫒 Title : updateTodo
 * 🫒 Description : handling updateTodo
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 14 July 2023
 *
 **/

// Dependency
const fs = require("fs");

const findId = (todos, id) => {
  let uuids = todos.map((todo) => {
    return todo.uuid;
  });
  if (uuids.includes(id)) {
    return true;
  } else {
    return false;
  }
};

const deleteTodo = (req, res) => {
  const fileName = __dirname.slice(0, -11) + "models/todos.json";
  // read the database
  fs.readFile(fileName, (readError, buffer) => {
    if (!readError) {
      const database = JSON.parse(buffer.toString());
      let todos = database.body.todos;
      const id = req.params.id;
      if (findId(todos, id)) {
        for (i = 0; i < todos.length; i++) {
          if (todos[i].uuid === id) {
            database.body.todos[i].updated = new Date().toLocaleString();
            database.body.todos[i].title = req.body.title;
            database.body.todos[i].description = req.body.description;
            database.body.todos[i].checked = req.body.checked;
          }
        }
        // write the file
        fs.writeFile(fileName, JSON.stringify(database), (writeError) => {
          if (!writeError) {
            // final success 🙌
            res.json({
              message: "todo has been updated",
              updatedTodo: {
                uuid: req.params.id,
                updated: new Date().toLocaleString(),
                title: req.body.title,
                description: req.body.description,
              },
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
          message: `didn't find any todo matched with ${id}`,
        });
      }
    } else {
      res.json({
        message: "can't read the database",
        readError,
      });
    }
  });
};

module.exports = deleteTodo;
