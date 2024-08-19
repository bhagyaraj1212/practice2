import React from 'react'
import { StatementOfWork } from '@/types';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import ProjectsSelect from '@/components/admin/projects-select';
import { SOWForm } from '@/components/admin/sow-form';

export default async function SOWAdd() {
    var newSOW: StatementOfWork = {
        id: '',
        name: '',
        projectId: '',
        fileLocation: null,
        startDate: null,
        endDate: null,
        value: null,
        active: false,
        createdAt: new Date(),
    };  

    return (
        <>
            <Title title="Add SOW"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <SOWForm statementOfWork={newSOW} formType="Add">
                        <ProjectsSelect projectId={newSOW.projectId??""}></ProjectsSelect>
                    </SOWForm>
                </div>
            </Container>
        </>
    )
}