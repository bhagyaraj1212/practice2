'use client'
import React from 'react'
import { SubmitButton } from '@/components/ui/submit-button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { addCustomer, updateCustomer } from "@/actions/customer";
import { Customer, FormType } from '@/types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CustomerFormProps {
  customer: Customer;  
  formType: FormType;
}

interface Children {
  children: React.ReactNode;
}

export const CustomerForm: React.FC<CustomerFormProps & Children> = ({ customer, formType, children }) => {

  return (
    <form action={async (formData) => {                
        if(formType == "Add")
          await addCustomer(formData) 
        else
          await updateCustomer(formData) 
    }} >
    <input type="hidden" name="id" value={customer?.id} />            
      <div className="grid gap-2 mb-4 sm:grid-cols-2 sm:gap-3 sm:mb-5">
        <div className="w-full">
          <Label htmlFor="compnayId">Company</Label>
          {children}
        </div>
        <div className="w-full">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" defaultValue={customer?.name} placeholder="Enter Name" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="displayName">Display Name</Label>
          <Input type="text" name="displayName" id="displayName" defaultValue={customer?.displayName??""} placeholder="Enter Display Name" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="contact">Contact</Label>
          <Input type="text" name="contact" id="contact" defaultValue={customer?.contact??""} placeholder=" Enter Contact Name" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="manager">Manager</Label>
          <Input type="text" name="manager" id="manager" defaultValue={customer?.manager??""} placeholder=" Enter Manager's Email" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="externalId">External Id</Label>
          <Input type="text" name="externalId" id="externalId" defaultValue={customer?.externalId??""} placeholder=" Enter External Id" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="federalTaxId">Federal Tax Id</Label>
          <Input type="text" name="federalTaxId" id="federalTaxId" defaultValue={customer?.federalTaxId??""} placeholder=" Enter Federal Tax Id" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="address1">Address 1</Label>
          <Input type="text" name="address1" id="address1" defaultValue={customer?.address1??""} placeholder=" Enter Address 1" required={false}></Input>
        </div>              
        <div className="w-full">
          <Label htmlFor="address2">Address 2</Label>
          <Input type="text" name="address2" id="address2" defaultValue={customer?.address2??""} placeholder=" Enter Address 2" required={false}></Input>
        </div> 
        <div className="w-full">
          <Label htmlFor="city">City</Label>
          <Input type="text" name="city" id="city" defaultValue={customer?.city??""} placeholder=" Enter City" required={false}></Input>
        </div>              
        <div className="w-full">
          <Label htmlFor="state">State</Label>
          <Input type="text" name="state" id="state" defaultValue={customer?.state??""} placeholder=" Enter State" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="zip">Zip</Label>
          <Input type="text" name="zip" id="zip" defaultValue={customer?.zip??""} placeholder=" Enter Zip" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" defaultValue={customer?.phone??""} placeholder=" Enter Phone" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="mobile">Mobile</Label>
          <Input type="text" name="mobile" id="mobile" defaultValue={customer?.mobile??""} placeholder=" Enter Mobile" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="fax">Fax</Label>
          <Input type="text" name="fax" id="fax" defaultValue={customer?.fax??""} placeholder=" Enter Fax" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="email">Email</Label>
          <Input type="text" name="email" id="email" defaultValue={customer?.email??""} placeholder=" Enter Email" required={false}></Input>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SubmitButton>
          {formType == 'Add' ? 'Add customer' : 'Update customer'}
        </SubmitButton>
        <Link href={'/admin/customers'}>
          <Button variant="outline" >
            <i className='fa fa-undo mr-2' />Return
          </Button>
        </Link>
      </div>
    </form>
  )
}