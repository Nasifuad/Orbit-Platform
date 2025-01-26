import { Router } from "express";
import {
  signup,
  login,
  profile,
  createpost,
  getpost,
} from "../controls/userControl.js";
import { joiUserValidator } from "../validators/userValidator.js";
import { joiUserSchema } from "../middlewares/joiValidator.js";
import jwtValidator from "../validators/jwtValidator.js";

const router = Router();

router.route("/").get((req, res) => {
  res.send("hello");
});
router.route("/signup").post(joiUserValidator(joiUserSchema), signup);
router.route("/login").post(login);
router.route("/profile").get(jwtValidator, profile);
router.route("/getpost").get(getpost);
router.route("/createpost").post(createpost);
export default router;
