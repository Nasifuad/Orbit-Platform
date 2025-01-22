import { comparePassword, hashPassword } from "../encryption/bCrypt.js";
import { User } from "../models/userModel.js";

export const signup = async (req, res, next) => {
  try {
    const userInfo = req.body;

    const hashedPass = await hashPassword(userInfo.password);
    userInfo.password = hashedPass;
    console.log("userInfo", userInfo);
    const checkExists = await User.findOne({ useremail: userInfo.useremail });

    if (checkExists) {
      res.json({ message: "User already exists" });
    } else {
      const createUser = await User.create(userInfo);
      res.json({
        message: "User created successfully",
        user: createUser,
        token: createUser.generateAuthToken(),
      });
      console.log("userInfo", createUser);
    }
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user) {
      const checkPass = comparePassword(password);
      checkPass && res.json({ message: "Login successful" });
    } else {
      res.json({ message: "Invalid username or password" });
    }
  } catch (error) {
    next(error);
  }
};

export const profile = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};
