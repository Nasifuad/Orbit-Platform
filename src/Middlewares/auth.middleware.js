import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
export const authMiddleware = (req, res, next) => {
  console.log(process.env.JWT_SECRET);
  console.log(req.cookies);
  try {
    const token = req.cookies.token;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token, process.env.JWT_SECRET);
    console.log(user);

    if (!token) {
      res.status(401).json({ message: "Unauthorized", status: false });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in auth middlewar", error);
  }
};
