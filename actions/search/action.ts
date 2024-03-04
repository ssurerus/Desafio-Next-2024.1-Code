import prisma from "@/lib/db";

const itemsPerPage = 6;

export async function fetchFilteredMembers(query: string, currentPage: number) {
    const offset = (currentPage - 1) * itemsPerPage;

    const members = await prisma.membro.findMany({
        where: {
            OR: [{name: {contains: query, mode: 'insensitive'}}],
        },
        orderBy:{
            name: 'asc'
        },
        take:itemsPerPage,
        skip: offset,
    });


    const count = await prisma.membro.count({
        where: {
            OR: [{name: {contains: query, mode: 'insensitive'}}],
        },
    });

    const totalPages = Math.ceil(count / itemsPerPage);

    return {members, count, totalPages}
}