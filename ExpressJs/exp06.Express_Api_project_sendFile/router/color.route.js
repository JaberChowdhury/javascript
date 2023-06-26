/**
 *
 * 🫒 Title : color route
 * 🫒 Description : handling color route here
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 25 June 2023
 *
 **/

// Dependency
const express = require("express");
const getHexadecimal = require("../helper/getHexadecimal.js");
const getRgb = require("../helper/getRgb.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("you hit on api/color route");
});

router.get("/hexadecimal", (req, res) => {
  const { count } = req.query;
  res.json(getHexadecimal(count));
});

router.get("/rgb", (req, res) => {
  const { count } = req.query;
  res.json(getRgb(count));
});

module.exports = router;
