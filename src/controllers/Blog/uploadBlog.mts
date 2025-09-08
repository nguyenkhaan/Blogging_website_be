import type { Request } from "express"
import type { Response } from "express"
import { uploadToCloud } from "../../services/Blog/uploadBlog.mjs"
import { uuid } from "../../helpers/uuid.mjs"
import { createData } from "../../services/Blog/crud.mjs"
import { addBlogForUser } from "../../services/Blog/addBlogForUser.mjs"
async function uploadBlog(req: Request, res: Response) {
    try {
        const { title, content , userID} = req.body;
        if (!title || !content) {
            return res.status(400).json({ code: -1, message: 'Thiếu nội dung hoặc tiêu đề' });
        }
        let url = null
        let id = uuid() 
        if (req.file) {
            try {
                const base64File = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
                url = await uploadToCloud(base64File, id);
            } catch (err) {
                return res.status(500).json({ code: -2, message: 'Lỗi hê thống - Vui lòng thử lại sau' });
            }
        }
        console.log(url?.url.secure_url ?? null) 
        const blogData = {
            blogID: id,
            title,
            banner: url?.url.secure_url ?? 'https://res.cloudinary.com/dikd164hg/image/upload/v1754925942/cld-sample-2.jpg', //Khi co public_id thi no dang tra ve 1 object co dang 
            //{id , url : {} } vay nen ta dung ? de truy cap, ?? thi de phat hien ben trai la null thi lay null ve ben phai luon
            content,
            score: 0,
            views: 0,
            userID: userID, 
        };

        const blog = await createData(blogData);  //Thêm blog vào Cơ sở dữ liệu 
        await addBlogForUser(userID , id)  //Thêm Blog vừa viết của user đó cho user 
        return res.status(201).json({
            code: 1,
            message: 'Upload thành công',
            data: blog
        });

    } catch (error) 
    {
        console.error(error);
        return res.status(500).json({
            code: -2,
            message: 'Lỗi hệ thống - Vui lòng thử lại sau'
        });
    }
}
export {uploadBlog}