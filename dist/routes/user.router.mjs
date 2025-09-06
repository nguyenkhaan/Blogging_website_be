import express from "express";
import { login, register } from "../controllers/User/user.authentication.controller.mjs";
import { getPersonalInformation, updatePersonalInformation } from "../controllers/User/user.personalInfo.mjs";
import { getUserBlogs } from "../controllers/User/getUserBlog.mjs";
import { activiyRecord } from "../controllers/User/activityRecord.mjs";
import { multerConfig } from "../config/server.config.mjs";
const router = express.Router();
const upload = multerConfig();
//[POST] /login 
router.post("/login", login);
//[POST] //register 
router.post('/register', register);
//[GET] //personal-information 
router.post('/user/personal-info', getPersonalInformation);
//[POST] //perosnal - blogs 
router.post('/user/personal-blogs', getUserBlogs);
//[POST] //activiy-record
router.post('/activity-record', activiyRecord);
router.post('/update-personal', upload.single('avatar'), updatePersonalInformation);
export { router };
