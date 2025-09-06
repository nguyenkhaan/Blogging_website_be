import { getBlog } from "../../services/Search/getBlog.mts";
async function searchBlog(req, res) {
    try {
        if (!req.body || !req.body.search)
            return res.status(200).json({
                code: -1,
                message: 'Thông tin gửi lên chưa hợp lệ'
            });
        const { search } = req.body;
        const data = await getBlog(search);
        return res.status(200).json({
            code: 2,
            message: 'Thành công',
            dataSearch: data
        });
    }
    catch (error) {
        return res.status(500).json({
            code: -2,
            message: 'Lỗi hệ thống. Vui lòng thử lại sau'
        });
    }
}
export { searchBlog };
