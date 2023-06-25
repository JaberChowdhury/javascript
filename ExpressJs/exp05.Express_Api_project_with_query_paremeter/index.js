import express from "express";
import useColor from "./router/color.route.js";
import useDummy from "./router/dummy.route.js";

const app = express();
const port = 5173;

app.use("/api/color/", useColor);
app.use("/api/user/", useDummy);

app.get("/", (req, res) => {
  res.send("You hit on home route");
});

app.use((req, res) => {
  res.send("Wrong url hit!!! ");
});

app.listen(port, () => {
  console.log(`App is successfully running at port : ${port}`);
});
