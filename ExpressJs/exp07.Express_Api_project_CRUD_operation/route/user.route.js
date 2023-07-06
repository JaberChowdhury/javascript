/**
 *
 * 🫒 Title : user router
 * 🫒 Description : handling all routes hits on /user
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 6 July 2023
 *
 **/

// Dependency
const express = require("express");
const addUser = require("../helper/user/addUser.js");
const getUser = require("../helper/user/getUser.js");
const getIdUser = require("../helper/user/getIdUser.js");
const deleteUser = require("../helper/user/deleteUser.js");
const updateUser = require("../helper/user/updateUser.js");
const fs = require("fs");
const path = require("path");

// initial the userRoute
const userRoute = express.Router();

// hone route for /user
userRoute.get("/", (req, res) => res.send("you hit /user"));

// add route for /user
userRoute.post("/add", addUser);

// get route for /user
userRoute.get("/get", getUser);

// get/:id route for /user
userRoute.get("/get/:id", getIdUser);

// delete route for /user
userRoute.delete("/delete", deleteUser);

// update route for /user
userRoute.put("/update", updateUser);

module.exports = userRoute;
