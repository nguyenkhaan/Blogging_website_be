import { mongodbPrisma } from "../../config/prisma.config.mjs";
async function updateActivityRecord(id:string , days: number) 
{

}
async function updateActivity(id:string , days: number) 
{
    const currentActivity = await mongodbPrisma.user.findFirst({
        where: {
            userID: id
        }, 
        select: {
            activities: true 
        }
    })
    // console.log(currentActivity) 
    if (currentActivity && currentActivity.activities) 
    {
        if (currentActivity.activities[days] < 5) 
        {
            currentActivity.activities[days] = currentActivity.activities[days] + 1
            await mongodbPrisma.user.update({
                where: {
                    userID: id 
                }, 
                data: {
                    activities: currentActivity?.activities 
                }
            })
        }
    } 
    return 

}
export {updateActivity}