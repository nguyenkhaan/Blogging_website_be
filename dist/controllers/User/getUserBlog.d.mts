import type { Request } from "express";
import type { Response } from "express";
declare function getUserBlogs(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export { getUserBlogs };
