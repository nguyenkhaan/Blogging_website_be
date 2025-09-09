import type { Request, Response } from "express";
declare function getTopUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export { getTopUser };
