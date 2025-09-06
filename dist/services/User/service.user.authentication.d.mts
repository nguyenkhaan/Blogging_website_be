declare function getData(email: string, password: string): Promise<{
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
declare function createData(email: string, password: string): Promise<void>;
declare function updateData(): Promise<void>;
declare function deleteData(): Promise<void>;
export { getData, createData, updateData, deleteData };
