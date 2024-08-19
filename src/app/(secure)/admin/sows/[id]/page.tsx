import React from 'react'
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import ProjectsSelect from '@/components/admin/projects-select';
import { SOWForm } from '@/components/admin/sow-form';
import { fetchSOW } from '@/src/actions/sow';

export default async function SOWEdit({params}: {params: {id: string}}) {

    const id  = params.id;
    const sow = await fetchSOW(id);

    return (
        <>
            <Title title="Edit SOW"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <SOWForm statementOfWork={sow} formType="Edit">
                        <ProjectsSelect projectId={sow.projectId??""}></ProjectsSelect>
                    </SOWForm>
                </div>
            </Container>
        </>
    )
}