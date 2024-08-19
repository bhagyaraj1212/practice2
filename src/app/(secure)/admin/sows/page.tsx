import React from 'react'
import { columns} from '@/components/table-columns/sow-columns'
import { DataTable } from '@/components/ui/data-table'
import Title from '@/components/ui/title'
import Container from '@/components/ui/container'
import { getSOWData } from '@/src/actions/sow'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function Sows() {
  const data = await getSOWData(); 
  return (
    <>
      <Title title="All SOWs"></Title>
      <Container>
        <Link href="/admin/sows/add">
          <Button variant="outline" className="bg-cyan-600 hover:bg-cyan-600/90 text-white hover:text-white"><i className='fa fa-add mr-2' />Add New</Button>
        </Link>
        <DataTable columns={columns} data={data} />
      </Container>
    </>
  )
}