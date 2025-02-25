import express from "express";
import cookieParser from "cookie-parser";
import { router } from "./src/Routes/auth.route.js";
import cors from "cors";
const app = express();
//damn middle wares

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "50mb",
    extended: true,
  })
);
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/v1/user", router);

export { app };
