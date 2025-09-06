declare function getData(id: string): Promise<{
    userID: string;
    name: string;
    blogs: string[];
    username: string;
    avatar: string | null;
    password: string;
    follows: number;
    subscribers: number;
    famous: number;
    activities: number[];
} | null>;
declare function updateData(id: string, payload: any, reqFile?: any): Promise<void>;
export { getData, updateData };
