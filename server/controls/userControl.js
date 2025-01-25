import { comparePassword, hashPassword } from "../encryption/bCrypt.js";
import { Post } from "../models/postModel.js";
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
      return res.json({
        message: "Signup successful",
        username: createUser.username,
      });
      console.log("userInfo", createUser);
    }
  } catch (error) {
    next(error);
  }
};

// export const login = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username });
//     if (user) {
//       const checkPass = comparePassword(password, user.password);
//       checkPass && res.json({ message: "Login successful" });
//       res.json({ user: username });
//     } else {
//       res.json({ message: "Invalid username or password" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    console.log("user", user);
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If login is successful
    return res.json({ message: "Login successful", username: user.username });
  } catch (error) {
    next(error); // Pass errors to your error-handling middleware
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
export const createpost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    next(error);
  }
};
export const getpost = async (req, res, next) => {
  try {
    res.json(await Post.find());
  } catch (error) {
    next(error);
  }
};
