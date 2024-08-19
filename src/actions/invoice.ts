import prisma from "@/utils/db";
import { Invoice } from '@/types'

export async function getInvoiceByCustomer(customerId: string) : Promise<Invoice[]> {

  const data = await prisma.invoice.findMany ({
    select: {
        id: true,
        sowId: true,
        customerId: true,
        customer: {
            select:{
                id: true,
                name: true,
            }
        },
        invoiceNo:true,
        invoiceDate: true,
        invoiceDueDate: true,
        invoiceStatus: true,
        poNumber: true,
        invoiceAmount: true,
        createdAt: true
    },   
    where: {
        customerId: customerId
    },
    orderBy: {
        invoiceDate: "asc",
    }
  });
  return data;
}

