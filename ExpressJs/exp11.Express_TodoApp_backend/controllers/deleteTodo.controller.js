/**
 *
 * 🫒 Title : deleteTodo
 * 🫒 Description : handling deleteTodo
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 13 July 2023
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
        const newTodos = todos.filter((todo) => {
          return todo.uuid !== id;
        });
        database.body.todos = newTodos;
        // write the file
        fs.writeFile(fileName, JSON.stringify(database), (writeError) => {
          if (!writeError) {
            // final success 🙌
            res.json({
              message: "todo has been deleted",
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
