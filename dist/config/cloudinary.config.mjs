import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
console.log(process.env.CLOUDINARY_KEY);
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET // Click 'View API Keys' above to copy your API secret
});
export { cloudinary };
