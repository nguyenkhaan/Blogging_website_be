import type { Request } from "express";
import type { Response } from "express";
declare function countBlogs(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function getBlogByPage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export { countBlogs, getBlogByPage };
