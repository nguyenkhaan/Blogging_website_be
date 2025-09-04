//Dung để đọc dữ liệu 1 bài Blog - Xài cho trang InnerBGlog 
import type { Request } from "express"
import type { Response } from "express"
import { getData , deleteData , updateData } from "../../services/Blog/crud.mts"
import defaultAvatar from "../../helpers/default-avatar.mts"


async function getBlog(req: Request , res: Response) 
{
    try {
        if (!req.body || !req.body.id) return res.status(200).json({
            code: -1, 
            message: 'Thông tin gửi lên không hợp lệ '
        })
        const data = await getData(req.body.id) 
        return res.status(200).json({
            code: 2, 
            message: 'Lấy thông tin thành công', 
            blogInfo: data 
        })
    } catch (error) {
        return res.status(200).json({
            code: -2, 
            message: 'Lỗi hệ thống - vui lòng thử lại sau'
        }) 
    }   
}

async function deleteBlog(req: Request , res: Response) 
{
    try {
        if (!req.body || !req.body.blogID || !req.body.userID) {
            return res.status(200).json({
                code: -1, 
                message: 'Thông tin gửi lên không hợp lệ'
            })
        }
        await deleteData(req.body.blogID , req.body.userID) 
        console.log('Thuc hien xoa bai') 
        return res.status(200).json({
            code: 2, 
            message: 'Gửi thông tin xóa bài thành công'
        })
    } catch (error) {
        return res.status(200).json({
            code: -2, 
            message: 'Lỗi hệ thống - vui lòng thử lại sau'
        })
    }
}

async function updateBlog(req: Request, res: Response) 
{
    // console.log(req.body) // In ra dữ liệu gửi lên 
    try {
        const {banner , title , content , blogID} = req.body 
        let base64File = defaultAvatar  //Dat la hinh anh mac dinh 
        if (banner === undefined && req.file) 
            base64File = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`
        const ans = await updateData(blogID , req.body , base64File)
        return res.status(200).json({
            code: 2, 
            message: 'Gửi thông tin thành công'
        })
    } catch (error) {
        return res.status(200).json({
            code: -2, 
            message: 'Lỗi hệ thống - Vui lòng thử lại sau'
        })
    }
}
export {getBlog , deleteBlog , updateBlog}

