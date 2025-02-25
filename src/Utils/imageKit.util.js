import ImageKit from "imagekit";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

// Initialize ImageKit with your API credentials
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export { imagekit };
