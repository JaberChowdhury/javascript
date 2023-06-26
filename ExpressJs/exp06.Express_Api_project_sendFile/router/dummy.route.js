const getDummy = require("../helper/getDummy.js");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Wow you hit on api/user route");
});
router.get("/dummy", (req, res) => {
  const { count } = req.query;
  res.json(getDummy(count));
});

module.exports = router;
