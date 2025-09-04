import express from 'express' 
import { searchBlog } from '../controllers/Search/searchBlog.controller.mts'
const router = express.Router() 

router.post('/search-blog' , searchBlog)

export {router}