import { mongodbPrisma } from "../../config/prisma.config.mjs";
import { mysqlPrisma } from "../../config/prisma.config.mjs";
import defaultAvatar from "../../helpers/default-avatar.mjs";
import { drop, upload } from "./cloud.mjs";
async function getData(id) {
    const user = mongodbPrisma.user.findFirst({
        where: {
            userID: id,
        },
    });
    if (!user)
        return null;
    return user;
}
async function updateData(id, payload, reqFile = undefined) {
    const userID = payload.id;
    const getInfo = await mongodbPrisma.user.findFirst({
        where: {
            userID: payload.id,
        },
        select: {
            avatar: true,
            name: true,
            password: true,
        },
    });
    const avatar = getInfo?.avatar;
    if (payload.avatar) {
        if (payload.avatar !== avatar) {
            //Cap naht lai duong link default khi nguoi dung go anh dai dien
            //Dieu kien: Ton tai duong link avatar (nguoi dung khong upload file) va duong link ton tai do khac voi duong link hien tai
            await Promise.all([
                mongodbPrisma.user.update({
                    where: { userID },
                    data: { avatar: defaultAvatar },
                }),
                mysqlPrisma.users.update({
                    where: { userID },
                    data: { avatar: defaultAvatar },
                }),
            ]);
        }
    }
    else {
        if (avatar != defaultAvatar)
            await drop(avatar); //Go di link hinh anh hien tai, nhung chi go khi no khong phai la hinh anh default
        const res = await upload(reqFile, userID);
        const url = res.url;
        await Promise.all([
            mongodbPrisma.user.update({
                where: { userID },
                data: { avatar: url },
            }),
            mysqlPrisma.users.update({
                where: { userID },
                data: { avatar: url },
            }),
        ]);
    }
    //[THAY DOI NAME]
    const name = getInfo?.name;
    if (payload.name && name != payload.name) {
        await Promise.all([
            mongodbPrisma.user.update({
                where: { userID },
                data: { name: payload.name },
            }),
            mysqlPrisma.users.update({
                where: { userID },
                data: { name: payload.name },
            }),
        ]); //Cho 2 promise chay song song de tiet kiem thoi gian
    }
    //[CAP NHAT PASSWORD]
    const password = getInfo?.password;
    if (password != payload.new_password && payload.new_password) {
        await mongodbPrisma.user.update({
            where: {
                userID: userID,
            },
            data: {
                password: payload.new_password,
            },
        });
    }
    console.log(">>> Check payload: ", payload);
}
export { getData, updateData };
