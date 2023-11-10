import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

try {
    const johnSmith = await prisma.user.upsert({
        where: { email: 'johnsmith@gmail.com' },
        update: {},
        create: {
            email: 'johnsmith@gmail.com',
            name: 'John Smith',
            username: 'johnsmith14',
        },
    })

    console.log({ johnSmith })
} catch (error) {
    console.error(error)
    await prisma.$disconnect()
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
}


