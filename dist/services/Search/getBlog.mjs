import { mysqlPrisma } from "../../config/prisma.config.mjs";
async function getBlog(search) {
    if (!search)
        return null;
    const res = await mysqlPrisma.$queryRaw `
        SELECT b.blogID , b.title, b.createdAt , b.score, b.updatedAt, u.name , u.avatar, b.views, b.watchs, u.UserID from Blogs b
        JOIN Users u ON b.UserID = u.userID
        WHERE LOWER(title) REGEXP ${search.toLowerCase()}
    `;
    return res;
}
export { getBlog };
//Su dung queryRaw thi kho bi SQL Injection 
//Su dung chuoi REGEXP de lay du lieu va so sanh bang REGEXP vi Prisma khong ho tro Regexr 
// MySQL prisma tu dong boc them '' vao gia tri ban truyen vao 
