import {v2 as cloudinary} from "cloudinary";
import { ENV } from "./env.js";

cloudinary.config({
    cloud_name : ENV.CLOUDINARY_CLOUD_NAME,
    api_key : ENV.CLIENT_URL,
    api_secret : ENV.CLOUDINARY_API_SECRET
});
export default cloudinary;

