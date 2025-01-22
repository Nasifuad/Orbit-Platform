import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
import connectDB from "./DB/mongoDB.js";
import router from "./router/auth_route.js";
connectDB() &&
  app.listen(process.env.PORT, () => console.log("Server is running"));

app.use("/api", router);
