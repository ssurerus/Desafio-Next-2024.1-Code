"use server"

import prisma from "@/lib/db"
import router, { redirect } from "next/navigation";

export default async function getMembers(){
    const members = await prisma.membro.findMany({
        where:{
            published: true
        },
        select:{
            id: true,
            name: true,
            cargo: true,
            email: true,
            published: true,
        },
    });

    const count = await prisma.membro.count();
    return {members, count};
}

export async function deleteMember(id: number){
    await prisma.membro.delete({
        where:{
            id: id
        }
    })
    redirect('/admin/management')
}

export async function createMember(formData: FormData){
    const name = formData.get('name') as string;
    const cargo = formData.get('cargo') as string;
    const email = formData.get('email') as string;
    await prisma.membro.create({
        data:{
            name,
            cargo,
            email,
            published: true
        }
    })
    redirect('/admin/management')
}

export async function editMember(id: number, formData: FormData){
    const name = formData.get('name') as string;
    const cargo = formData.get('cargo') as string;
    const email = formData.get('email') as string;
    await prisma.membro.update({
        where:{
            id: id
        },
        data:{
            name,
            cargo,
            email
        }
    })
    redirect('/admin/management')
}