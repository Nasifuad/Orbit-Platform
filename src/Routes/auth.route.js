import express from "express";
import {
  getUser,
  homePage,
  login,
  register,
} from "../Controllers/auth.control.js";
const router = express.Router();

router.route("/").get(homePage);
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/users").get(getUser);

export { router };
