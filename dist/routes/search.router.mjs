import express from 'express';
import { searchBlog } from '../controllers/Search/searchBlog.controller.mjs';
const router = express.Router();
router.post('/search-blog', searchBlog);
export { router };
