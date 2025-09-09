declare function getTopUserService(): Promise<{
    userID: string;
    name: string;
    avatar: string | null;
    subscribers: number;
    famous: number;
}[]>;
export { getTopUserService };
