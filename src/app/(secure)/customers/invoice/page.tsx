import React from 'react'
import { Customer, Invoice, SOWResource, StatementOfWork } from '@/types';
import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import { fetchCustomer } from '@/src/actions/customer';
import { InvoiceForm } from '@/src/components/customers/invoice-form';

export default async function AddInvoice({searchParams}: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const customer: Customer = await fetchCustomer(searchParams?.id == undefined ? "" : Array.isArray(searchParams?.id) ? "" : searchParams?.id);
    var newInvoice: Invoice = {
        id: '',
        invoiceDate: new Date()
    }
    return (
        <>
            <Title title="Add a new Invoice"></Title>
            <Container>
                <div className = 'w-full p-4 lg:w-2/3 2xl:w-1/2'>
                    <InvoiceForm invoice={newInvoice} sowResources={[]} customerName={customer.name}></InvoiceForm>
                </div>
            </Container>
        </>
    )
}