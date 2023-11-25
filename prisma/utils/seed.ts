import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

try {
    const superAdmin = await prisma.user.upsert({
        where: { email: 'superadmin@admin.com' },
        update: {},
        create: {
            email: 'superadmin@admin.com',
            name: 'Super Admin',
            username: 'superadmin',
            password: 'admin1234'
        },
    })

    const johnSmith = await prisma.user.upsert({
        where: { email: 'johnsmith@gmail.com' },
        update: {},
        create: {
            email: 'johnsmith@gmail.com',
            name: 'John Smith',
            username: 'johnsmith14',
            password: 'misho1234'
        },
    })

    console.log({ superAdmin, johnSmith })
} catch (error) {
    console.error(error)
    await prisma.$disconnect()
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
}


