import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  const user = jwt.verify(token, process.env.JWT_SECRET);
  console.log(user);

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  req.user = user;
  next();
};
