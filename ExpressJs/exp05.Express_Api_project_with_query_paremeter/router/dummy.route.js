import express from "express";
import getDummy from "../helper/getDummy.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Wow you hit on api/user route");
});
router.get("/dummy", (req, res) => {
  const { count } = req.query;
  res.json(getDummy(count));
});

export default router;
