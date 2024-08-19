"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react" 
import { Button } from "@/components/ui/button"
import { Project } from "@/types"
import {ProjectForm} from "@/components/admin/project-form"
import CustomersSelect from "@/components/admin/customers-select"
import Link from "next/link"

export const columns: ColumnDef<Project>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original
      return (
        <Link href={`/admin/projects/${project.id}`}>
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
          Project Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },    
  },
  {
    accessorKey: "customer.name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },    
  },
  {
    accessorKey: "manager",
    header: "Manager",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },  
]
