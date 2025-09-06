import { getData, updateData } from "../../services/User/service.personalInfo.mjs";
async function getPersonalInformation(req, res) {
    try {
        if (!req.body || !req.body.id)
            return res.status(200).json({
                code: -1,
                message: 'Thông tin gửi lên không hợp lệ'
            });
        const data = await getData(req.body.id);
        if (!data)
            return res.status(200).json({
                code: -1,
                message: 'Thông tin gửi lên không hợp lệ'
            });
        const dataSent = {
            avatar: data.avatar,
            id: data.userID,
            email: data.username,
            follows: data.follows,
            subscribers: data.subscribers,
            name: data.name,
            activities: data.activities,
            password: data.password,
            blogs: data.blogs
        };
        return res.status(200).json({
            code: 2,
            message: 'Loaded personal information successfully',
            data: dataSent
        });
    }
    catch (error) {
        return res.status(500).json({
            code: -2,
            message: 'Lỗi hệ thống - Vui lòng thử lại sau'
        });
    }
}
async function updatePersonalInformation(req, res) {
    if (!req.body) {
        return res.status(200).json({
            code: -1,
            message: 'Thông tin gửi lên không hợp lệ'
        });
    }
    const payload = req.body;
    let base64File = undefined; //Neu khong co hinh anh upload thi no se la undefined 
    if (req.file)
        base64File = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    await updateData(payload.id, payload, base64File);
    return res.status(200).json({
        code: 2,
        message: 'Cập nhật Thông tin cá nhân thành công'
    });
}
export { getPersonalInformation, updatePersonalInformation };
