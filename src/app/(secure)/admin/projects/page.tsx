import React from 'react'
import { columns} from '@/components/table-columns/project-columns'
import { DataTable } from '@/components/ui/data-table'
import Title from '@/components/ui/title'
import Container from '@/components/ui/container'
import { getProjectData } from '@/src/actions/project'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Projects() {
  const projects = await getProjectData();     
  return (
    <>
      <Title title="All projects"></Title>
      <Container>
        <Link href="/admin/projects/add">
          <Button variant="outline" className="bg-cyan-600 hover:bg-cyan-600/90 text-white hover:text-white"><i className='fa fa-add mr-2' />Add New</Button>
        </Link>
        <DataTable columns={columns} data={projects} />
      </Container>
    </>
  )
}