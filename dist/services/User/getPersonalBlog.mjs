import { mongodbPrisma } from "../../config/prisma.config.mjs";
import { mysqlPrisma } from "../../config/prisma.config.mts";
async function getPersonalBlog(userID, isContent) {
    let selection = await mongodbPrisma.user.findFirst({
        where: {
            userID: userID
        },
        select: {
            blogs: true //Lay ra mang blogs 
        }
    });
    let blogID = [];
    if (selection)
        blogID = selection.blogs;
    const blogs = await mysqlPrisma.blogs.findMany({
        where: {
            blogID: {
                in: blogID
            }
        },
        select: {
            banner: true,
            blogID: true,
            content: isContent, //Chi dinh co can lay Content khong  
            title: true,
            score: true
        }
    });
    return blogs;
}
export { getPersonalBlog };
