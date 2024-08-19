import React from 'react'
import Title from '@/components/ui/title'
import Container from '@/components/ui/container'
import CompanyForm from '@/src/components/admin/company-form'
import { getCompanyData } from '@/src/actions/company';

export default async function Company() {

  const data = await getCompanyData(); 
  return (
    <>
      <Title title="My company"></Title>
      <Container>
        <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
          <CompanyForm company={data[0]}></CompanyForm>
        </div>
      </Container>
    </>
  )
}