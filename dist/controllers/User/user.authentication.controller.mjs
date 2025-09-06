import { getData, createData } from "../../services/User/service.user.authentication.mts";
import { makeToken } from "../../services/User/createToken.mts";
//[LOGIN] 
async function login(req, res) {
    if (!req.body || !req.body.email || !req.body.password)
        return res.status(200).json({
            code: -2,
            message: 'Lỗi đăng nhập - Vui lòng thử lại sau'
        });
    const { email, password } = req.body;
    const user = await getData(email, password);
    if (!user)
        return res.status(200).json({
            code: -1,
            message: 'Thông tin đăng nhập sai' //Thong tin dang nhap sai 
        });
    //Thuc hien set jwt token va gui ve cho FE 
    const token = makeToken(user.userID, user.name);
    return res.status(200).json({
        code: 2,
        message: 'Đăng nhập thành công',
        token: JSON.stringify(token)
    });
}
//[REGISTER] 
async function register(req, res) {
    if (!req.body || !req.body.email || !req.body.password)
        return res.status(200).json({
            code: -2,
            message: 'Lỗi đăng kí - Vui lòng thử lại sau'
        });
    console.log(req.body);
    const { email, password } = req.body;
    const user = await getData(email, password);
    if (user)
        return res.status(200).json({
            code: -1,
            message: 'Thông tin người dùng đã tồn tại'
        });
    await createData(email, password); //Thêm dữ liệu người dùng vào mongoDB và 1 phần dữ liệu đi vào mySQL để sử dụng nhanh sau này 
    return res.status(200).json({
        code: 1,
        message: 'Đăng kí thành công. Chúc bạn tận hưởng vui vẻ'
    });
}
export { login, register };
