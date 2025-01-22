import Joi from "joi";

export const joiUserSchema = Joi.object({
  username: Joi.string().required().min(6).max(20).message({
    "string.empty": "Username is required",
    "string.min": "Username should be at least 6 characters long",
    "string.max": "Username should be at most 20 characters long",
    "string.base": "Username should be a string",
  }),
  useremail: Joi.string().required().email().message({
    "string.empty": "Email is required",
    "string.email": "Email is invalid",
    "string.base": "Email should be a string",
  }),
  password: Joi.string().required().min(6).max(20).message({
    "string.empty": "Password is required",
    "string.min": "Password should be at least 6 characters long",
    "string.max": "Password should be at most 20 characters long",
    "string.base": "Password should be a string",
  }),
}).unknown(true);
