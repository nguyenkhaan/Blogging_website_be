import { mongodbPrisma } from "../../config/prisma.config.mts";
async function addBlogForUser(userID, blogID) {
    await mongodbPrisma.user.update({
        where: {
            userID: userID
        },
        data: {
            blogs: {
                push: blogID
            }
        }
    });
}
export { addBlogForUser };
