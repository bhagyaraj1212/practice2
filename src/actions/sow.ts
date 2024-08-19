"use server";
import { revalidatePath } from "next/cache";
import prisma from "../app/utils/db";
import { redirect } from "next/navigation";
import { StatementOfWork } from '@/types'

export async function getSOWData() : Promise<StatementOfWork[]> {
  const data = await prisma.statementOfWork.findMany ({
    select: {
      id: true,
      projectId: true,   
      project: true,
      name: true,
      fileLocation: true,
      startDate: true,
      endDate: true,
      value: true,
      active: true,
      createdAt: true,
    },    
    orderBy: {
      name: "asc",
    }
  });
  return data;
}

export async function fetchSOW(id: string) : Promise<StatementOfWork> {
  const data = await prisma.statementOfWork.findFirstOrThrow ({
    select: {
      id: true,
      projectId: true,
      project: true,
      name: true,
      fileLocation: true,
      startDate: true,
      endDate: true,
      value: true,
      active: true,
      createdAt: true,
    },    
    where: {
      id: id
    }
  });
  return data;
}

export async function updateSOW(formData: FormData){
    "use server";        
    const data = await prisma.statementOfWork.update({
        data: {
            name: formData.get("name") as string,
            fileLocation: formData.get("fileLocation") as string,
            startDate: formData.get("startDate") == "" ? null : new Date(formData.get("startDate") as string),
            endDate: formData.get("endDate") == "" ? null : new Date(formData.get("endDate") as string),
            value: parseFloat(formData.get("value") as string),
            active: Boolean(formData.get("active")),
        },
        where: {
            id: formData.get("id") as string
        }
    });
    revalidatePath("/admin/sows");
    redirect("/admin/sows");
}

export async function addSOW(formData: FormData){
    "use server";    
    const data = await prisma.statementOfWork.create({
        data: {
            project: {
                connect: {
                    id: formData.get("projectId") as string,
                }
            },
            name: formData.get("name") as string,
            fileLocation: formData.get("fileLocation") as string,
            startDate: formData.get("startDate") == "" ? null : new Date(formData.get("startDate") as string),
            endDate: formData.get("endDate") == "" ? null : new Date(formData.get("endDate") as string),
            value: parseFloat(formData.get("value") as string),
            active: Boolean(formData.get("active")),
        }
    });
    revalidatePath("/admin/sows");
    redirect("/admin/sows");
}