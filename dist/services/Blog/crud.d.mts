declare function createData(blog: any): Promise<{
    blogID: string;
    title: string;
    banner: string | null;
    content: string;
    score: number;
    views: number;
    createdAt: Date;
    watchs: number;
    updatedAt: Date;
    userID: string;
}>;
declare function deleteData(blogID: string, userID: string): Promise<void>;
declare function updateData(blogID: string, payload: any, base64File: string): Promise<void>;
declare function getData(id: string): Promise<{
    title: string;
    banner: string | null;
    content: string;
} | null>;
declare function getDataForHome(page: number): Promise<{
    blogID: string;
    title: string;
    content: string;
    score: number;
    views: number;
    createdAt: Date;
    author: {
        userID: string;
        name: string;
        avatar: string;
    };
}[]>;
export { createData, getData, getDataForHome, deleteData, updateData };
