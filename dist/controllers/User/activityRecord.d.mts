import type { Request, Response } from "express";
declare function activiyRecord(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export { activiyRecord };
