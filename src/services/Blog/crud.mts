import { mongodbPrisma, mysqlPrisma } from "../../config/prisma.config.mjs";
import { drop, upload } from "../User/cloud.mjs";
import defaultAvatar from "../../helpers/default-avatar.mjs";
import { uuid } from "../../helpers/uuid.mjs";

async function createData(blog: any) {
    return await mysqlPrisma.blogs.create({
        data: {
            blogID: blog.blogID,
            title: blog.title,
            content: blog.content,
            score: blog.score,
            views: blog.views,
            banner: blog.banner || defaultAvatar,  //Neu nhu khong co banner thi chuyen qua duong link mac dinh 
            userID: blog.userID,
            watchs: 0,
            createdAt: new Date(Date.now()).toISOString(),
            updatedAt: new Date(Date.now()).toISOString(),
        },
    });
}

async function deleteData(blogID: string , userID: string) {
    const blogInfo = await mysqlPrisma.blogs.findFirst({
        where: {
            blogID : blogID
        }, 
        select: {
            banner: true, 
            blogID: true 
        }
    })
    await drop(blogInfo?.banner as string) //Go banner tren cloud 
    await mysqlPrisma.blogs.delete({
        where: {
            blogID: blogID
        }
    })
    const users = await mongodbPrisma.user.findUnique({
        where: {userID}
    })
    await mongodbPrisma.user.update({
        where: {
            userID: userID
        }, 
        data: {
            blogs: {
                set: users?.blogs.filter(x => x != blogID)
            }
        }
    })
}

async function updateData(blogID: string , payload:any , base64File: string) {
    const {banner , title , content} = payload
    const blogInfo = await mysqlPrisma.blogs.findUnique({
        where: {
            blogID: blogID
        }, 
        select: {
            title: true, 
            banner: true 
        }
    })
    const blogIDImage = uuid() 
    if (banner === undefined && base64File) 
    //Neu nhu no la hinh anh mac dinh thi banner van bang null => Chi khi banner == undefined thi nguoi dung moi upload hinh anh moi 
    {
        await Promise.all([
            drop(blogInfo?.banner as string), 
            upload(base64File , blogIDImage)
        ])
    }
    await mysqlPrisma.blogs.update({
        where: {blogID}, 
        data: {
            ...(title? {title} : {}), 
            content: content 
        }
    })
}

async function getData(id: string) {
    const res = await mysqlPrisma.blogs.findFirst({
        where: {
            blogID: id,
        },
        select: {
            banner: true,
            content: true,
            title: true,
        },
    });
    return res;
}

async function getDataForHome(page: number) {
    const res = await mysqlPrisma.blogs.findMany({
        skip: 20 * page,
        take: 20,
        select: {
            blogID: true,
            title: true,
            content: true,
            createdAt: true,
            author: {
                select: { name: true , avatar: true , userID: true},
            },
            views: true, 
            score: true 
        },
    });
    for (let i = 0; i < res.length; ++i) res[i].content = res[i].content.slice(0, 300) 
    return res;
}
export { createData, getData, getDataForHome , deleteData , updateData};
