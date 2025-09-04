function getDayBetween(startDate: Date, endDate: Date): number 
{
    return Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
}
export {getDayBetween}