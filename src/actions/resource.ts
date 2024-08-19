"use server";
import { revalidatePath } from "next/cache";
import prisma from "../app/utils/db";
import { redirect } from "next/navigation";
import { Resource } from '@/types'

export async function getResourceData() : Promise<Resource[]> {
  const data = await prisma.resource.findMany ({
    select: {
      id: true,
      companyId: true,
      name: true,
      federalTaxId: true,
      address1: true,
      address2: true,
      city: true,
      state: true,
      zip: true,
      phone: true,
      mobile: true,
      fax: true,
      email: true,
      createdAt: true,
    },    
    orderBy: {
      name: "asc",
    }
  });
  return data;
}

export async function fetchResource(id: string) : Promise<Resource> {
  const data = await prisma.resource.findFirstOrThrow ({
    select: {
      id: true,
      companyId: true,
      name: true,
      federalTaxId: true,
      address1: true,
      address2: true,
      city: true,
      state: true,
      zip: true,
      phone: true,
      mobile: true,
      fax: true,
      email: true,
      createdAt: true,
    },    
    where: {
      id: id
    }
  });
  return data;
}

export async function updateResource(formData: FormData){
    "use server";    
    const data = await prisma.resource.update({
        data: {
            name: formData.get("name") as string,
            federalTaxId: formData.get("federalTaxId") as string,
            address1: formData.get("address1") as string,
            address2: formData.get("address2") as string,
            city: formData.get("city") as string,
            state: formData.get("state") as string,
            zip: formData.get("zip") as string,
            phone: formData.get("phone") as string,
            mobile: formData.get("mobile") as string,
            fax: formData.get("fax") as string,
            email: formData.get("email") as string,
        },
        where: {
            id: formData.get("id") as string
        }
    });
    revalidatePath("/admin/resources");
    redirect("/admin/resources");
}

export async function addResource(formData: FormData){
    "use server";    
    const data = await prisma.resource.create({
        data: {
            company: {
                connect: {
                    id: formData.get("companyId") as string,
                }
            },
            name: formData.get("name") as string,
            federalTaxId: formData.get("federalTaxId") as string,
            address1: formData.get("address1") as string,
            address2: formData.get("address2") as string,
            city: formData.get("city") as string,
            state: formData.get("state") as string,
            zip: formData.get("zip") as string,
            phone: formData.get("phone") as string,
            mobile: formData.get("mobile") as string,
            fax: formData.get("fax") as string,
            email: formData.get("email") as string,
        }
    });
    revalidatePath("/admin/resources");
    redirect("/admin/resources");
}