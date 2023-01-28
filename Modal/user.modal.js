const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  category: String,
  level: String,
  number_que: Number,
});

const UserModal = mongoose.model("mock-xv-data", UserSchema);

module.exports = UserModal;
