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
userShcema.methods.getAuthToken = function () {
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      isAdmin: this.isAdmin,
      useremail: this.useremail,
    },
    process.env.SECRET_KEY
  );
};
export const User = model("User", userShcema);
