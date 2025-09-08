import type { Request } from "express";
import type { Response } from "express";
import { getPersonalBlog } from "../../services/User/getPersonalBlog.mjs";
async function getUserBlogs(req: Request , res: Response) 
{
    try {
        if (!req.body || !req.body.id) return res.status(200).json({
            code: -1, 
            message: 'Thong tin gui len khong hop le'
        })
        const id = req.body.id 
        const data = await getPersonalBlog(id as string , req.body.isContent) 
        return res.status(200).json({
            code: 2, 
            message: 'Get blog successfully', 
            blogs: data 
        })
    } catch (error) {
        return res.status(200).json({
            code: -2, 
            message: 'Lỗi hệ thống - Vui lòng thử lại sau'
        })
    }
}
export {getUserBlogs}