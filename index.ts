import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const getAllUsers = await prisma.user.findMany(); 
    // console.log(getAllUsers);

    const postUser = await prisma.user.create({
        data: {
            email: 'kamrulhasan@gamil.com',
            name: 'Kamrul hasan',
            age: 34
        }
    })
    console.log(postUser)
}
main();