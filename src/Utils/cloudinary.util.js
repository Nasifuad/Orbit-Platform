import { configDotenv } from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

configDotenv({
  path: "./.env",
});

cloudinary.config({
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
});

// ✅ Function to upload buffer data to Cloudinary with a manual timestamp
const streamUpload = (buffer) => {
  const timestamp = Math.floor(Date.now() / 1000); // Unix timestamp in seconds

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        timestamp,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    // Convert buffer to stream
    Readable.from(buffer).pipe(stream);
  });
};

export default streamUpload;
