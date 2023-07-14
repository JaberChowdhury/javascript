/**
 *
 * 🫒 Title : todo route
 * 🫒 Description : handling all todo routes
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 13 July 2023
 *
 **/
// make filename
const fileName = __dirname.slice(0, -6);

// Dependency
const express = require("express");
const getTodos = require(fileName + "controllers/getTodos.controller.js");
const getEachTodo = require(fileName + "controllers/getEachTodo.controller.js");
const saveTodo = require(fileName + "controllers/saveTodo.controller.js");
const deleteTodo = require(fileName + "controllers/deleteTodo.controller.js");
const updateTodo = require(fileName + "controllers/updateTodo.controller.js");

// initial
const todoRoute = express.Router();

todoRoute.get("/", getTodos);
todoRoute.post("/", saveTodo);
todoRoute.get("/:id", getEachTodo);
todoRoute.delete("/:id", deleteTodo);
todoRoute.patch("/:id", updateTodo);

module.exports = todoRoute;
