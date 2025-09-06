function extractPublicId(url, cloudName = 'dikd164hg') {
    // Bỏ domain và cloudName
    const baseRegex = new RegExp(`https?:\\/\\/res\\.cloudinary\\.com\\/${cloudName}\\/image\\/upload\\/`);
    let publicId = url.replace(baseRegex, "");
    // Bỏ version nếu có dạng v1234567890/
    publicId = publicId.replace(/^v[0-9]+\//, "");
    // Bỏ extension (.jpg, .png, ...)
    publicId = publicId.replace(/\.[^/.]+$/, "");
    return publicId;
}
export { extractPublicId };
