declare function upload(base64File: string, id: string): Promise<import("cloudinary").UploadApiResponse>;
declare function drop(url: string): Promise<void>;
export { upload, drop };
