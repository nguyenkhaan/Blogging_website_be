import { cloudinary } from "../../config/cloudinary.config.mts";
async function uploadToCloud(base64File, id) {
    const url = await cloudinary.uploader.upload(base64File, {
        public_id: id
    });
    return { id, url };
}
export { uploadToCloud };
