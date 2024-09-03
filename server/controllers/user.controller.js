const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();

const signUp = async (req, res,next) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User alrady exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullname, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_KEY);

    res.status(201).json({
      message: "User craeted succesfully",
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        role: newUser.role,
       
      },
      token:token
    });
  } catch (err) {
    console.log(err + "err");
    next(err);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    

    if (!user) {
      return res.status(400).json({ message: "User not reg" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
    console.log(user);

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        
      },
      token:token
    });
  } catch (err) {
    console.error("Error during sign in:", err);
    next(err);
  }
};

const updateUser = async(req, res, next) => {
  try {
    const { userId, fullname, email, oldPassword, newPassword } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(req.body.userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

   if(fullname) user.fullname = fullname;
   
    if (oldPassword && newPassword) {
      // Validate old password
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Old password is incorrect" });
      }
      user.password = await bcrypt.hash(newPassword, 10);
    }
   
    const updateUser = await user.save();
    res.status(200).json({
      message: "Profile updated successfully",
      user: updateUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { signUp, signIn, updateUser };
