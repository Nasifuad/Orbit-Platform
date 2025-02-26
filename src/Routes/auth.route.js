import express from "express";
import { upload } from "../Middlewares/multer.middleware.js";
import { authMiddleware } from "../Middlewares/auth.middleware.js";
import {
  getUser,
  homePage,
  login,
  register,
  checkUser,
} from "../Controllers/auth.control.js";
const router = express.Router();

router.route("/").get(homePage);
router.route("/login").post(login);
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    { name: "cover", maxCount: 1 },
  ]),
  register
);
router.route("/user").get(authMiddleware, getUser);
router.route("/check").get(authMiddleware, checkUser);
router.get("/check-cookies", (req, res) => {
  console.log("Cookies received:", req.cookies);
  res.json(req.cookies);
});
export { router };
