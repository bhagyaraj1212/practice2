"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Customer } from "@/types"
import Link from "next/link"

export const columns: ColumnDef<Customer>[] = [  
  {    
    id: "actions",
    cell: ({ row }) => {      
      const customer = row.original
      return (
        <Link href={`/admin/customers/${customer.id}`}>
          <Button variant="outline" >
          <i className='fa fa-edit' />
        </Button>
        </Link>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },    
  },
  {
    accessorKey: "contact",
    header: "Contact",
  },
  {
    accessorKey: "manager",
    header: "Manager",
  },
]
