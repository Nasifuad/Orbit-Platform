import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
import connectDB from "./DB/mongoDB.js";
import router from "./router/auth_route.js";
import errorhandler from "./validators/errorHandle.js";
app.use(errorhandler);
connectDB() &&
  app.listen(process.env.PORT, () =>
    console.log(` Server is running on port ${process.env.PORT}`)
  );

app.use("/api", router);
