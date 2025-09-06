import { cloudinary } from "../../config/cloudinary.config.mjs";
import { extractPublicId } from "../../helpers/extractPublicIdCloud.mjs";
async function upload(base64File, id) {
    const url = await cloudinary.uploader.upload(base64File, {
        public_id: id
    });
    return url; //Tra ve duong link sau khi upload 
}
async function drop(url) {
    const publicId = extractPublicId(url);
    await cloudinary.uploader.destroy(publicId); //Xoa di hinh anh tren cloud 
}
export { upload, drop };
