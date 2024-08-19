import React from 'react'
import CompaniesSelect from '@/components/admin/companies-select';
import { Customer } from '@/types';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import { CustomerForm } from '@/components/admin/customer-form';

export default async function CustomerAdd() {
    var newCustomer: Customer = {
        id: '',
        companyId: '',
        name: '',
        displayName: null,
        contact: null,
        manager: null,
        externalId: null,
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
            <Title title="Add customer"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <CustomerForm customer={newCustomer} formType="Add">
                        <CompaniesSelect companyId={newCustomer.companyId!}></CompaniesSelect>
                    </CustomerForm>
                </div>
            </Container>
        </>
    )
}