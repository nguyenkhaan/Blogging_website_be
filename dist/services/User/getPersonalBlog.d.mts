declare function getPersonalBlog(userID: string, isContent: boolean): Promise<{
    blogID: string;
    title: string;
    banner: string | null;
    content: string;
    score: number;
}[]>;
export { getPersonalBlog };
