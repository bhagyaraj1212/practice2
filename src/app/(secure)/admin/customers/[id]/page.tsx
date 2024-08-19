import React from 'react'
import { CustomerForm } from '@/components/admin/customer-form';
import CompaniesSelect from '@/components/admin/companies-select';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import { fetchCustomer } from '@/src/actions/customer';


export default async function CustomerEdit({params}: {params: {id: string}}) {
    const id  = params.id;
    const customer = await fetchCustomer(id);
    return (
        <>
            <Title title="Edit customer"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <CustomerForm customer={customer} formType="Edit">
                        <CompaniesSelect companyId={customer.companyId!}></CompaniesSelect>
                    </CustomerForm>
                </div>
            </Container>
        </>
    )
}