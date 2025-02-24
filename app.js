import express from "express";
import cookieParser from "cookie-parser";
const app = express();
//damn middle wares
app.use(cookieParser());
app.use(
  express.json({
    limit: "50mb",
    extended: true,
  })
);

export { app };
