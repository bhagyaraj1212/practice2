"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react" 
import { Button } from "@/components/ui/button"
import { StatementOfWork } from "@/types"
import Link from "next/link"

export const columns: ColumnDef<StatementOfWork>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const sow = row.original
      return (
        <Link href={`/admin/sows/${sow.id}`}>
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
          SOW Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },    
  },
  {
    accessorKey: "project.name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Project
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },    
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => {
      const fDate = (row.getValue("startDate") as Date)?.toDateString()
      return <>{fDate}</>
    },
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => {      
      const fDate = (row.getValue("endDate") as Date)?.toDateString()
      return <>{fDate}</>
    },
  },
  {
    accessorKey: "value",
    header: "$ Value",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("value"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <>{formatted}</>
    },
  },
  {
    accessorKey: "active",
    header: "Active",
  },  
]