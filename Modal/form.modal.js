const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  category: String,
  level: String,
  number_que: Number,
  score:Number,
  No_of_que:Number

});

const FormModal = mongoose.model("mock-xv-user", UserSchema);

module.exports = FormModal;
