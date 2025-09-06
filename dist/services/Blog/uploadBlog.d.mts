declare function uploadToCloud(base64File: string, id: string): Promise<{
    id: string;
    url: import("cloudinary").UploadApiResponse;
}>;
export { uploadToCloud };
