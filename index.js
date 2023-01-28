const express = require("express");
var cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./Routes/user.route");
const formRouter = require("./Routes/form.route");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("test");
});
app.use("/", userRouter);
app.use("/", formRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Listing to port 8080");
  } catch (err) {
    console.log("Error in connection DB");
    console.log(err);
  }
});
