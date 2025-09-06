import type { Request } from "express";
import type { Response } from "express";
declare function getBlog(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function deleteBlog(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function updateBlog(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export { getBlog, deleteBlog, updateBlog };
