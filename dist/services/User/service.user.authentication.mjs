import { getDayBetween } from "../../helpers/calcDateBetween.mjs";
import { uuid } from "../../helpers/uuid.mts";
import { startDate, endDate } from "../../helpers/currentDate.mts";
import { mongodbPrisma } from "../../config/prisma.config.mts";
import { mysqlPrisma } from "../../config/prisma.config.mts";
async function getData(email, password) {
    const user = await mongodbPrisma.user.findFirst({
        where: {
            username: email,
            password: password
        }
    });
    if (!user)
        return null;
    return user;
}
async function createData(email, password) {
    let userID = (uuid() + uuid());
    userID = userID.replace(/-/g, '').substring(0, 24);
    const userData = {
        userID: userID,
        username: email,
        password: password,
        name: email,
        activities: Array(getDayBetween(startDate, endDate)).fill(0),
        avatar: 'https://res.cloudinary.com/dikd164hg/image/upload/v1754925942/cld-sample-2.jpg',
        blogs: [],
        famous: 0,
        follows: 0,
        subscribers: 0
    };
    await mongodbPrisma.user.create({
        data: {
            ...userData
        }
    });
    await mysqlPrisma.users.create({
        data: {
            userID: userData.userID,
            name: userData.name,
            avatar: userData.avatar,
            username: userData.username
        }
    });
}
async function updateData() {
}
async function deleteData() {
}
export { getData, createData, updateData, deleteData };
