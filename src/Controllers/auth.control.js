import { User } from "../Models/auth.model.js";

import bycrypt from "bcrypt";

const generateCookies = (res, user) => {};

const homePage = async (req, res) => {
  res.send("testing for home page route  at route 5050 api/v1/user");
};

const login = async (req, res) => {
  const { userName, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ userName });
  console.log(user);
  // always that damn aync await
  if (!user) {
    res.json({ message: "user not found" });
  }

  const checkedPassword = await user.checkPassword(password);
  if (!checkedPassword) {
    res.json({ message: "password not matched" });
  } else {
    res.json({
      message: "User login successfull",
      user,
    });
  }
};

const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log(req.body);

    const user = await User.create({ userName, email, password });
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log("error at reg", error);
  }
};

const getUser = async (req, res) => {
  const user = await User.find();
  res.json(user);
};

export { homePage, login, register, getUser };
