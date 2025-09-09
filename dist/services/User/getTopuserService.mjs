import { mongodbPrisma } from "../../config/prisma.config.mjs";
async function getTopUserService() {
    const res = await mongodbPrisma.user.findMany({
        where: {},
        take: 4,
        orderBy: {
            famous: 'desc'
        },
        select: {
            name: true,
            avatar: true,
            famous: true,
            subscribers: true,
            userID: true
        },
    });
    return res;
}
export { getTopUserService };
