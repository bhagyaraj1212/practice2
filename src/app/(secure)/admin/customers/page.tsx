import React from 'react'
import { columns} from '@/components/table-columns/customer-columns'
import { DataTable } from '@/components/ui/data-table'
import Title from '@/components/ui/title'
import Container from '@/components/ui/container'
import { getCustomerData } from '@/src/actions/customer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Customers() {
  const customer = await getCustomerData(); 
  return (
    <>
      <Title title="All customers"></Title>
      <Container>
        <Link href='/admin/customers/add'>
          <Button variant="outline" className="bg-cyan-600 hover:bg-cyan-600/90 text-white hover:text-white"><i className='fa fa-add mr-2' />Add New</Button>
        </Link>
        <DataTable columns={columns} data={customer} />
      </Container>
    </>
  )
}