import {v2 as cloudinary} from "cloudinary";
import fs from "fs";




import { v2 as cloudinary } from 'cloudinary';
import { response } from "express";


    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
        api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,  // Click 'View API Keys' above to copy your API secret
    });




// Upload an image
const uploadOnCloudinary = async (localFiePath) => {
    try {
        if (!localFiePath) return null;
        // upload the file on cloudinary
    await cloudinary.uploader.upload(localFiePath, {
            resource_type: "auto",
        })
        // file has been uploaded successfully
        console.log("file si uploaded on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFiePath); // remove the locally saved temporary as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}
    
