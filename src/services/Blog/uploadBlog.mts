import { cloudinary } from "../../config/cloudinary.config.mjs"
async function uploadToCloud(base64File:string , id:string) 
{
    const url = await cloudinary.uploader.upload(base64File , {
        public_id: id 
    })
    return {id , url}
} 
export {uploadToCloud}