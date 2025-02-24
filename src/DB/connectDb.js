import mongoose from "mongoose";

const URI =
  process.env.MONGO_URI ||
  "mongodb+srv://nasifuad007:nasif123@orbit.50q2t.mongodb.net/Orbit?";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected", mongoose.connection.readyState);
  } catch (error) {
    console.log(error);
    exit(1);
  }
};
export default connectDb;
