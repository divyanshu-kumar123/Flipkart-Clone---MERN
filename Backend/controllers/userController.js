const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const expressError = require("../utils/expressError.js");

//Register user
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new expressError(400, "User already exists");
  }

  const user = await User.create({ name, email, password, role });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    throw new expressError(400, "Invalid user data");
  }
};

//Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    throw new expressError(401, "Invalid email or password");
  }
};

// Get user profile
const getUserProfile = async (req, res) => {
  if (!req.user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { _id, name, email, role } = req.user;
  res.json({ _id, name, email, role });
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
