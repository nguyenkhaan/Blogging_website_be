import type { Request , Response } from "express";
import { getTopUserService } from "../../services/User/getTopuserService.mjs";
async function getTopUser(req: Request , res: Response) 
{   
    const ans = await getTopUserService(); 
    return res.status(200).json({
        code: 2, 
        message: 'Láy dữ liệu top user thành công',  
        data: ans 
    })
} 
export {getTopUser}