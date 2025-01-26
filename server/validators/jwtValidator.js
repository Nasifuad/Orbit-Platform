import jwt from "jsonwebtoken";

export const jwtValidator = (req, res, next) => {
  const token = req.header("Authorization");
  try {
    // console.log(token);
    const isVerified = jwt.verify(token, process.env.SECRET_KEY);
    console.log("Jwt token validated", isVerified);

    next();
  } catch (error) {
    next(error);
  }
};

export default jwtValidator;
