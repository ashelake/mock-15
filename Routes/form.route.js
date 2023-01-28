const express = require("express");
const FormModal = require("../Modal/form.modal");

const formRouter = express.Router();
formRouter.get("/form", async (req, res) => {
  // console.log(req.body);
  let data = await FormModal.find();
  res.send(data);
});
formRouter.post("/form", async (req, res) => {
  console.log(req.body);
  let data = await FormModal.insertMany(req.body);
  res.send({ msg: "Post success" });
});
formRouter.patch("/form", async (req, res) => {
  console.log(req.body);
  let data = await FormModal.findOneAndUpdate(
    { name: req.body.name },
    { score: req.body.score }
  );
  res.send({ msg: "Post success", data: data });
});

module.exports = formRouter;
