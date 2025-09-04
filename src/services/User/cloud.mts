import { cloudinary } from "../../config/cloudinary.config.mts";
import { extractPublicId } from "../../helpers/extractPublicIdCloud.mts";
async function upload(base64File: string, id: string) 
{
    const url = await cloudinary.uploader.upload(base64File , {
        public_id: id 
    })
    return url //Tra ve duong link sau khi upload 
}

async function drop(url : string) 
{
    const publicId = extractPublicId(url) 
    await cloudinary.uploader.destroy(publicId)  //Xoa di hinh anh tren cloud 
}

export {upload , drop}