import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
const userShcema = new Schema({
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: false,
  },
});
userShcema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_KEY);
};
export const User = model("User", userShcema);
