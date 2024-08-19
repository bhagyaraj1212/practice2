"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react" 
import { Button } from "@/components/ui/button"
import { Resource } from "@/types"
import Link from "next/link"

export const columns: ColumnDef<Resource>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const resource = row.original
      return (
        <Link href={`/admin/resources/${resource.id}`}>
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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
]
