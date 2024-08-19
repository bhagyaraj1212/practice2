"use server";
import { revalidatePath } from "next/cache";
import prisma from "../app/utils/db";
import { redirect } from "next/navigation";
import { Project } from '@/types'

export async function getProjectData() : Promise<Project[]> {
  const data = await prisma.project.findMany ({
    select: {
      id: true,
      customerId: true,
      customer: true,   
      name: true,
      manager: true,
      phone: true,
      email: true,
      createdAt: true,
    },    
    orderBy: {
      name: "asc",
    }
  });
  return data;
}

export async function fetchProject(id: string) : Promise<Project> {
  const data = await prisma.project.findFirstOrThrow ({
    select: {
      id: true,
      customerId: true,
      customer: true,   
      name: true,
      manager: true,      
      email: true,
      phone: true,      
      createdAt: true,
    },    
    where: {
      id: id
    }
  });
  return data;
}

export async function fetchProjectsByCustomer(id: string) : Promise<Project[]> {
  const data = await prisma.project.findMany ({
    select: {
      id: true,
      customerId: true,
      customer: {
        select: {
          id: true,
          name: true,
        }
      },
      name: true,
      manager: true,      
      email: true,
      phone: true,
      statementsOfWork: {
        select: {
          id: true,
          name: true,
          fileLocation: true,
          startDate: true,
          endDate: true,
          value: true,
          active: true,
          sowResources: {
            select: {
              id: true,              
              resource: {
                select:{
                  id: true,
                  name: true,
                  email: true
                }
              },              
              projectRole: {
                select:{
                  id: true,
                  role: true
                }
              },
              active:  true,
              billingRate: true
            }
          }          
        }
      }
    },    
    where: {
      customerId: id
    }
  });
  return data;
}

export async function updateProject(formData: FormData){
    "use server";    
    const data = await prisma.project.update({
        data: {
            name: formData.get("name") as string,            
            manager: formData.get("manager") as string,
            phone: formData.get("phone") as string,
            email: formData.get("email") as string,
        },
        where: {
            id: formData.get("id") as string
        }
    });
    revalidatePath("/admin/projects");
    redirect("/admin/projects");
}

export async function addProject(formData: FormData){
    "use server";    
    const data = await prisma.project.create({
        data: {
            customer: {
                connect: {
                    id: formData.get("customerId") as string
                }
            },
            name: formData.get("name") as string,            
            manager: formData.get("manager") as string,
            phone: formData.get("phone") as string,
            email: formData.get("email") as string,
        }
    });    
    revalidatePath("/admin/projects");
    redirect("/admin/projects");
}