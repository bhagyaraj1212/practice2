"use server";
import { revalidatePath } from "next/cache";
import prisma from "../app/utils/db";
import { redirect } from "next/navigation";

export async function addSOWResource(formData: FormData){
    "use server";    
    const path = formData.get("pathname") as string
    const data = await prisma.sOWResource.create({
        data: {
            statementOfWork: {
                connect: {
                    id: formData.get("sowId") as string,
                }
            },
            resource: {
                connect: {
                    id: formData.get("resourceId") as string,
                }
            },
            projectRole: {
                connect: {
                    id: formData.get("projectRoleId") as string,
                }
            },
            active: true,
            billingRate: parseFloat(formData.get("billingRate") as string),
        }
    });
    revalidatePath(path);
    redirect(path);
}

export async function deleteSOWResource(formData: FormData){
    "use server";    
    const path = formData.get("pathname") as string
    const sowResourceId = formData.get("id") as string
    const data = await prisma.sOWResource.delete({
        where: {
            id: sowResourceId
        }
    });
    revalidatePath(path);
}