import { configDotenv } from "dotenv";
configDotenv({
  path: "./.env",
});
import { app } from "./app.js";
import connectDb from "./src/DB/connectDb.js";

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
