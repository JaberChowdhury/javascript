/**
 *
 * 🫒 Title : color route
 * 🫒 Description : handling color route here
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 25 June 2023
 *
 **/

// Dependency
import express from "express";
import getHexadecimal from "../helper/getHexadecimal.js";
import getRgb from "../helper/getRgb.js";

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

export default router;
