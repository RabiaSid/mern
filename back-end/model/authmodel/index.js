const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "User Name is Required"],
  },
  userName: {
    type: String,
    required: [true, "User Name is Required"],
  },
  contact: {
    type: String,
  },
  cnic: {
    type: String,
  },
  role: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;