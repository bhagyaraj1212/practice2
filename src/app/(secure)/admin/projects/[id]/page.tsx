import React from 'react'
import { ProjectForm } from '@/components/admin/project-form';
import CustomersSelect from '@/components/admin/customers-select';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import { fetchProject } from '@/src/actions/project';


export default async function CustomerEdit({params}: {params: {id: string}}) {

    const id  = params.id;
    const project = await fetchProject(id);

    return (
        <>
            <Title title="Edit project"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <ProjectForm project={project} formType="Edit">
                        <CustomersSelect customerId={project.customerId}></CustomersSelect>
                    </ProjectForm>
                </div>
            </Container>
        </>
    )
}