import type { Request } from "express";
import type { Response } from "express";
declare function getPersonalInformation(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function updatePersonalInformation(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export { getPersonalInformation, updatePersonalInformation };
