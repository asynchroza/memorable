import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const dbName = "memorableDb"
await prisma.$executeRawUnsafe(`DROP DATABASE IF EXISTS ${dbName};`);
