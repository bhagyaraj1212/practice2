import React from 'react'
import { Customer, SOWResource, StatementOfWork } from '@/types';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import { SOWResourceForm } from '@/components/customers/sow-resource-form';
import { fetchCustomer } from '@/src/actions/customer';
import { getResourceData } from '@/src/actions/resource';
import { getProjectRoleData } from '@/src/actions/projectRole';

export default async function AddSOWResource({searchParams}: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {    
    var newSOWResource: SOWResource = {
        id: '',
        active: false,
        sowId: searchParams?.selected == undefined ? "" : Array.isArray(searchParams?.selected) ? "" : searchParams?.selected
    }
    const resources = await getResourceData()
    const projectRoles = await getProjectRoleData();
    const customer: Customer = await fetchCustomer(searchParams?.id == undefined ? "" : Array.isArray(searchParams?.id) ? "" : searchParams?.id);
    return (
        <>
            <Title title="Add Resource to an SOW"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <SOWResourceForm sowResource={newSOWResource} customerName = {customer.name} resources={resources} projectRoles={projectRoles} />
                </div>
            </Container>
        </>
    )
}