import { Router } from "express";
import { signup, login, profile } from "../controls/userControl.js";
import { joiUserValidator } from "../validators/userValidator.js";
import { joiUserSchema } from "../middlewares/joiValidator.js";

const router = Router();

router.route("/").get((req, res) => {
  res.send("hello");
});
router.route("/signup").post(joiUserValidator(joiUserSchema), signup);
router.route("/login").post(login);
router.route("/profile").get(profile);
export default router;
