import prisma from "@/utils/db";
import { ProjectRole } from '@/types'

export async function getProjectRoleData() : Promise<ProjectRole[]> {

  const data = await prisma.projectRole.findMany ({
    select: {
        id: true,      
        role: true,
        createdAt: true,
    },    
    orderBy: {
      role: "asc",
    }
  });
  return data;
}