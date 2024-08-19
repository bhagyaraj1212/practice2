"use server";

import prisma from "../app/utils/db";
import { Company } from '@/types';

export async function getCompanyData() : Promise<Company[]> {
console.log("--------------------------------------------------")
    const data = await prisma.company.findMany ({
      select: {
        id: true,
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
        createdAt: "desc",
      }
    });

    return data;
  }

export async function updateCompany(formData: FormData){
    "use server";
    const data = await prisma.company.update({
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
}