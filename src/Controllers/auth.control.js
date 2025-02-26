import { User } from "../Models/auth.model.js";
import { imagekit } from "../Utils/imageKit.util.js";
import cookieParser from "cookie-parser";
const setCookies = (user, res) => {
  const token = user.generateJwtToken();
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  return token;
};

const homePage = async (req, res) => {
  res.send("testing for home page route  at route 5050 api/v1/user");
};

const login = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    console.log(user);

    if (!user) {
      res.json({ message: "user not found" });
      return;
    }

    const checkedPassword = await user.checkPassword(password);
    console.log(checkedPassword);
    if (!checkedPassword) {
      res.json({ message: "password not matched" });
    } else {
      const token = setCookies(user, res);
      res.json({
        message: "User login successfull",
        user,
        status: true,
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    // Ensure request is sent as form-data
    const { userName, email, password } = req.body;
    const { avatar, cover } = req.files;

    if (!avatar || !cover) {
      return res
        .status(400)
        .json({ message: "Both avatar and cover images are required." });
    }

    // Upload avatar to ImageKit
    const avatarUpload = await imagekit.upload({
      file: avatar[0].buffer, // Use buffer for direct upload
      fileName: avatar[0].originalname,
      folder: "/user_avatars",
    });

    // Upload cover to ImageKit
    const coverUpload = await imagekit.upload({
      file: cover[0].buffer,
      fileName: cover[0].originalname,
      folder: "/user_covers",
    });

    // Create user in database
    const user = await User.create({
      userName,
      email,
      password,
      avatar: avatarUpload?.url,
      cover: coverUpload?.url,
    });
    const token = setCookies(user, res);
    res.json({
      message: "User registered successfully",
      user,
      token,
      status: true,
    });
  } catch (error) {
    console.error("Error at registration:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const getUser = async (req, res) => {
  const { user } = req.user;
  console.log(user);
  res.json(user);
};
const checkUser = async (req, res) => {
  const { user } = req.user;
  console.log(user);
  res.json({
    message: "User been logged",
    user,
    status: true,
  });
};
export { homePage, login, register, getUser, checkUser };
