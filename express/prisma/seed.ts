import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function  main() {
    const book1 = await prisma.post.create({
        data: {
            title: '本1',
            content: '本1の内容',
            publishd: false
        },
    });
    const book2 = await prisma.post.create({
        data: {
            title: '本2',
            content: '本2の内容',
            publishd: false
        },
    });
    const book3 = await prisma.post.create({
        data: {
            title: '本3',
            content: '本3の内容',
            publishd: false
        },
    });
    const book4 = await prisma.post.create({
        data: {
            title: '本4',
            content: '本4の内容',
            publishd: true
        },
    });
    const book5 = await prisma.post.create({
        data: {
            title: '本5',
            content: '本5の内容',
            publishd: true
        },
    });

    console.log({book1, book2, book3, book4, book5});
}

main().catch((e) => {
    console.log(e);
}).finally(async () => {
    await prisma.$disconnect();
})