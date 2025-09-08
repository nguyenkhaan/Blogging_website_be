import type { Request , Response } from "express";
import { updateActivity } from "../../services/User/updateActivity.mjs";
async function activiyRecord(req : Request, res : Response) 
{
    // console.log(req.body) 
    const {id , days} = req.body 
    await updateActivity(id , days) 
    return res.status(200).json({
        code: 2, 
    })
}
export {activiyRecord}