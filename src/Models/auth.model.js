import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
const userAuthSchema = Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: false,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: false,
      unique: false,
    },
    cover: {
      type: String,
      required: false,
      unique: false,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    isVerified: {
      type: Boolean,
      required: false,
      unique: false,
    },
    isBlocked: {
      type: Boolean,
      required: false,
      unique: false,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      unique: false,
    },
  },
  { timestamps: true }
);

userAuthSchema.methods.generateJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};
userAuthSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userAuthSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 10);
  }
  next();
});
const User = mongoose.model("User", userAuthSchema);
export { User };
