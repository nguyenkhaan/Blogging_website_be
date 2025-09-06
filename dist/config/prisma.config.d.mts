import { PrismaClient as mongodb } from "../../generated/mongodb/index.js";
import { PrismaClient as mysql } from "../../generated/mysql/index.js";
declare const mongodbPrisma: mongodb<import("../../generated/mongodb/index.js").Prisma.PrismaClientOptions, never, import("../../generated/mongodb/runtime/library.js").DefaultArgs>;
declare const mysqlPrisma: mysql<import("../../generated/mysql/index.js").Prisma.PrismaClientOptions, never, import("../../generated/mysql/runtime/library.js").DefaultArgs>;
export { mongodbPrisma, mysqlPrisma };
