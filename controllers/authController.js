const User = require("../models/user");
const jwt = require("jsonwebtoken");
var moment = require("moment");
const bcrypt = require("bcrypt");


const { v4: uuidv4 } = require('uuid');

const { sendResetPasswordEmail } = require("../utils/mailer");

const maxAge = 3 * 24 * 60 * 60;

const generateResetToken = () => {
  return uuidv4();
};

const handleError = (err) => {
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate error code
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    let errorsarray = Object.values(err.errors);
    errorsarray.forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

// creating tokens
const createTokens = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};

module.exports.signup = async (req, res) => {
  console.log(req.body)
  const { name, email, password, confirmPassword } = req.body;
  if (password == confirmPassword) {
    try {
      const user = await User.create({ name, email, password });
      const token = createTokens(user._id);
      console.log(token);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user, token });
    } catch (err) {
      console.log(err);
      const errors = handleError(err);
      res.status(404).json({ errors });
    }
  } else {
    res
      .status(400)
      .json({ errors: { confirmPassword: "Password Doesn't matches" } });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({email, password});
    if(!user){
      throw Error("incorrect email or password")

    }
    const token = createTokens(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user, token });
  } catch (err) {
    const errors = handleError(err);
    res.status(404).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res
    .clearCookie("jwt")
    .status(204)
    .json({ message: "Logged out successfully" });
};

module.exports.auth = async (req, res) => {
  console.log(req.headers)
  let token = req.headers.authorization;
  console.log("tok", token);
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      console.log(err);
      if (err) {
        res.status(200).json({ msg: "Login to Proceed" });
      } else {
        const user = await User.findById(decodedToken.id);
        if (user) {
          res.status(200).json({ user, msg: "User Login Found" });
        }
      } 
    });
  } else {
    res.status(200).json({ msg: "Login to Proceed" });
  }
};

module.exports.forgotPassword = async (req, res) => {

  try {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const resetToken = generateResetToken();
    user.resetToken = resetToken;
    user.resetTokenExpires = moment().add(1, 'hour'); // Reset link expires in 1 hour
    await user.save();
    sendResetPasswordEmail(email, resetToken);
    return res.status(200).json({ message: 'Reset link sent to your email', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
}



module.exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Find the user by the reset token
    const user = await User.findOne({ resetToken: token, resetTokenExpires: { $gt: new Date() } });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    // Update the user's password and clear the reset token fields
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword
    user.resetToken = null;
    user.resetTokenExpires = null;
    await user.save();

    res.json({ message: 'Password reset successfully', user, hashedPassword });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports.getuser = async (req, res) => {

  res.status(200).json({ user });
};
