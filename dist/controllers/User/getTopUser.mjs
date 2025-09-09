import { getTopUserService } from "../../services/User/getTopuserService.mjs";
async function getTopUser(req, res) {
    const ans = await getTopUserService();
    return res.status(200).json({
        code: 2,
        message: 'Láy dữ liệu top user thành công',
        data: ans
    });
}
export { getTopUser };
