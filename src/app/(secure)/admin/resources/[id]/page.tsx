import React from 'react'
import CompaniesSelect from '@/components/admin/companies-select';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import { fetchResource } from '@/src/actions/resource';
import { ResourceForm } from '@/components/admin/resource-form';


export default async function ResourceEdit({params}: {params: {id: string}}) {

    const id  = params.id;
    const resource = await fetchResource(id);

    return (
        <>
            <Title title="Edit resource"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <ResourceForm resource={resource} formType="Edit">
                        <CompaniesSelect companyId={resource.companyId?? ""}></CompaniesSelect>
                    </ResourceForm>
                </div>
            </Container>
        </>
    )
}