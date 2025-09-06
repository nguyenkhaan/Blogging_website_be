import express from 'express';
import multer from 'multer';
import path from 'path';
const __dirname = path.resolve();
function jsonConfig(app) {
    app.use(express.json());
}
function urlEncodedConfig(app) {
    app.use(express.urlencoded({ extended: true }));
}
function multerConfig() {
    //Luu tru du lieu len tren dia
    /*
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname , '../server/uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now()) //Dinh dang ten file
        }
    })
    */
    //Luu tru du lieu file duoi dang RAM va luu trong buffer cua req.file 
    const storage = multer.memoryStorage();
    var upload = multer({ storage: storage });
    return upload;
}
function staticFileConfig(app) {
    app.use(express.static('./public'));
}
export { jsonConfig, urlEncodedConfig, multerConfig, staticFileConfig };
