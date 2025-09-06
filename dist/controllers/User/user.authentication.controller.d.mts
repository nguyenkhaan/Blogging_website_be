import type { Request } from "express";
import type { Response } from "express";
declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function register(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export { login, register };
