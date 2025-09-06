import { PrismaClient as mongodb } from "../../generated/mongodb/index.js";
import { PrismaClient as mysql } from "../../generated/mysql/index.js"; //Trong module thi phai chi ro ra file do
const mongodbPrisma = new mongodb();
const mysqlPrisma = new mysql();
export { mongodbPrisma, mysqlPrisma };
