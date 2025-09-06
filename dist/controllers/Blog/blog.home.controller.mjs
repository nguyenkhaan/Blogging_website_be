import { mysqlPrisma } from "../../config/prisma.config.mjs";
import { getDataForHome } from "../../services/Blog/crud.mts";
async function countBlogs(req, res) {
    const totalBlogs = await mysqlPrisma.blogs.count();
    return res.status(200).send(totalBlogs);
}
async function getBlogByPage(req, res) {
    try {
        if (!req.body || req.body.page === undefined)
            return res.status(200).json({
                code: -1,
                message: 'Thong tin gui len khong hop le111'
            });
        const data = await getDataForHome(req.body.page); //Dử liệu gửi về client 
        return res.status(200).json({
            code: 1,
            message: 'Gửi dữ liệu thành công',
            blogs: data
        });
    }
    catch (error) {
        return res.status(200).json({
            code: -2,
            message: 'Loi he thong. Vui long thu lai sau'
        });
    }
}
export { countBlogs, getBlogByPage };
