const express = require("express");
const UserModal = require("../Modal/user.modal");

const userRouter = express.Router();

userRouter.get("/data", async (req, res) => {
  console.log(req.query);
  if (req.query.cat == "any") {
    req.query.cat = "";
  }
  let filtered = await UserModal.find({
    category: req.query.cat,
    difficulty: req.query.diff,
  }).limit(Number(req.query.num));
  res.send(filtered);
});

module.exports = userRouter;
