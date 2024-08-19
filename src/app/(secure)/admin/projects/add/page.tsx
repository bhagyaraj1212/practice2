import React from 'react'
import { Project } from '@/types';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import { ProjectForm } from '@/components/admin/project-form';
import CustomersSelect from '@/components/admin/customers-select';

export default async function ProjectAdd() {
    var newProject: Project = {
        id: '',
        customerId: '',
        name: '',
        manager: '',
        phone: null,
        email: null,
        createdAt: new Date()
      };  

    return (
        <>
            <Title title="Add project"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <ProjectForm project={newProject} formType="Add">
                        <CustomersSelect customerId={newProject.customerId}></CustomersSelect>
                    </ProjectForm>
                </div>
            </Container>
        </>
    )
}