import React from 'react'
import CompaniesSelect from '@/components/admin/companies-select';
import { Resource } from '@/types';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import { ResourceForm } from '@/components/admin/resource-form';

export default async function ResourceAdd() {
    var newResource: Resource = {
        id: '',
        companyId: '',
        name: '',
        federalTaxId: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip: null,
        phone: null,
        mobile: null,
        fax: null,
        email: null,
        createdAt: new Date()
      };    

    return (
        <>
            <Title title="Add resource"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <ResourceForm resource={newResource} formType="Add">
                        <CompaniesSelect companyId={newResource.companyId?? ""}></CompaniesSelect>
                    </ResourceForm>
                </div>
            </Container>
        </>
    )
}