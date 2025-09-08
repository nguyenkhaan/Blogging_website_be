import express from 'express' 
const router = express.Router(); 
import { multerConfig } from '../config/server.config.mjs';
import { deleteBlog, getBlog, updateBlog } from '../controllers/Blog/blog.controller.mjs';
import { uploadBlog } from '../controllers/Blog/uploadBlog.mjs';
import { countBlogs } from '../controllers/Blog/blog.home.controller.mjs';
import { getBlogByPage } from '../controllers/Blog/blog.home.controller.mjs';
const upload = multerConfig() 
//[POST] - UPLOAD BLOG 
router.post('/blog-upload', upload.single('banner'), uploadBlog)
//[GET]  - PERSONAL BLOG 
router.post('/blog-info' , getBlog)
//[GET]  - BLOG FOR HOMEPAGE
router.get('/count-blog' ,  countBlogs)
router.post('/get-blog-by-page' , getBlogByPage) //Dung cho trang home 
router.post('/delete-personal-blog' , deleteBlog)
router.post('/update-blog' , upload.single('banner') , updateBlog)
export {router}