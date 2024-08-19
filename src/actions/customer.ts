"use server";
import { revalidatePath } from "next/cache";
import prisma from "../app/utils/db";
import { redirect } from "next/navigation";
import { Customer } from '@/types';

export async function getCustomerData() : Promise<Customer[]> {
  try {
    const data = await prisma.customer.findMany ({
      select: {
        id: true,
        companyId: true,
        name: true,
        displayName: true,      
        contact: true,
        manager: true,
        externalId: true,
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
      orderBy: 
      {
        name: "asc",      
      },
    });
    return data;
  } catch(err){
    console.log(err) 
    return [{
          id:"2",
          companyId: "1",
          name: "true",
          displayName: "Customer 1",      
          contact: "Contact",
          manager: "Manager1",
          externalId: "externalID",
          federalTaxId: "federalTaxId",
          address1: "Address1",
          address2: "Address2",
          city: "city",
          state: "City",
          zip: "zip",
          phone: "94968712345365",
          mobile: "846698223355",
          fax: "55dd",
          email: "ddsd45s4d5",
          createdAt: new Date(),
       
    }]
  }
  
}

export async function fetchCustomer(id: string) : Promise<Customer> {
  try{
    const data = await prisma.customer.findFirstOrThrow ({
      select: {
        id: true,
        companyId: true,
        name: true,
        displayName: true,      
        contact: true,
        manager: true,
        externalId: true,
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
      },
    });
    return data;
  }
 catch(err){
 return {
      id: "id",
      companyId: "companyId",
      name: "name",
      displayName: "displayName",      
      contact: "contact",
      manager: "manager",
      externalId: "externalId",
      federalTaxId: "federalTaxId",
      address1: "address1",
      address2: "address2",
      city: "city",
      state: "state",
      zip: "zip",
      phone: "phone",
      mobile: "mobile",
      fax: "fax",
      email: "email",
      
    }
  
 }
 
}

export async function updateCustomer(formData: FormData){
    "use server";
    const pathname = formData.get("pathname") as string;
    const data = await prisma.customer.update({
        data: {
            name: formData.get("name") as string,
            displayName: (formData.get("displayName") as string) == "" ? null : formData.get("displayName") as string,
            contact: formData.get("contact") as string,
            manager: formData.get("manager") as string,
            externalId:formData.get("externalId") as string,
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
    revalidatePath("/admin/customers");
    redirect("/admin/customers");
}

export async function addCustomer(formData: FormData){
    "use server";
    const pathname = formData.get("pathname") as string;
    const data = await prisma.customer.create ({
        data: {
            company:{
                connect:{ id: formData.get("companyId") as string }
            },            
            name: formData.get("name") as string,
            displayName: (formData.get("displayName") as string) == "" ? null : formData.get("displayName") as string,
            contact: formData.get("contact") as string,
            manager: formData.get("manager") as string,
            externalId:formData.get("externalId") as string,
            federalTaxId: formData.get("federalTaxId") as string,
            address1: formData.get("address1") as string,
            address2: formData.get("address2") as string,
            city: formData.get("city") as string,
            state: formData.get("state") as string,
            zip: formData.get("zip") as string,
            phone: formData.get("phone") as string,
            mobile: formData.get("mobile") as string,
            fax: formData.get("fax") as string,
            email: formData.get("email") as string
        }
    });
    revalidatePath("/admin/customers");
    redirect("/admin/customers");
}