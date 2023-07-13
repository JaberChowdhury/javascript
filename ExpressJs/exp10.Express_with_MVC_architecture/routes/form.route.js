/**
 *
 * 🫒 Title : form route
 * 🫒 Description : handling form route
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 12 July 2023
 *
 **/

// Dependency
const express = require("express");
const router = express.Router();
const getUsers = require("../controllers/getUsers.controller.js");
const saveUsers = require("../controllers/saveUsers.controller.js");
const getAllUsers = require("../controllers/getAllUsers.controller.js");

router.get("/", getUsers);
router.post("/", saveUsers);
router.get("/all", getAllUsers);

module.exports = router;
