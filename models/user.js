const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name"],
    uppercase: true,
  },
  email: {
    type: String,
    required: [true, "Email is a required field"],
    validate: [isEmail, "Please Enter a valid email"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
    minLength: [8, "Password must be at least 8 characters"],
  },
  resetToken: {
    type: String,
  
  },
  resetTokenExpires: {
    type: Date,
  },
  budget: {
    type: Number,
  },
});


userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email, password });
  if (user) {
    return user;
  
  
  }
  if(!user){
    throw Error("incorrect email or password");
  }
};

const User = mongoose.model("user", userSchema);
module.exports = User;
