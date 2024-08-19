'use client'
import React from 'react'
import { SubmitButton } from '@/components/ui/submit-button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { updateCompany } from "@/actions/company";
import { Company } from '@/types'

interface CompanyFormProps {
  company: Company | null;
}

export default function CompanyForm(props: CompanyFormProps) {
  return (
    <>      
        {props.company ? (
        <form action={updateCompany} >
        <input type="hidden" name="id" value={props.company?.id} />          
            <div className="grid gap-2 mb-4 sm:grid-cols-2 sm:gap-3 sm:mb-5">
            <div className="w-full">
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" id="name" defaultValue={props.company?.name} placeholder="Enter Name" required={false}></Input>
            </div>
            <div className="w-full">
                <Label htmlFor="federalTaxId">Federal Tax Id</Label>
                <Input type="text" name="federalTaxId" id="federalTaxId" defaultValue={props.company?.federalTaxId??""} placeholder=" Enter Federal Tax Id" required={false}></Input>
            </div>
            <div className="w-full">
                <Label htmlFor="address1">Address 1</Label>
                <Input type="text" name="address1" id="address1" defaultValue={props.company?.address1??""} placeholder=" Enter Address 1" required={false}></Input>
            </div>              
            <div className="w-full">
                <Label htmlFor="address2">Address 2</Label>
                <Input type="text" name="address2" id="address2" defaultValue={props.company?.address2??""} placeholder=" Enter Address 2" required={false}></Input>
            </div> 
            <div className="w-full">
                <Label htmlFor="city">City</Label>
                <Input type="text" name="city" id="city" defaultValue={props.company?.city??""} placeholder=" Enter City" required={false}></Input>
            </div>              
            <div className="w-full">
                <Label htmlFor="state">State</Label>
                <Input type="text" name="state" id="state" defaultValue={props.company?.state??""} placeholder=" Enter State" required={false}></Input>
            </div>
            <div className="w-full">
                <Label htmlFor="zip">Zip</Label>
                <Input type="text" name="zip" id="zip" defaultValue={props.company?.zip??""} placeholder=" Enter Zip" required={false}></Input>
            </div>
            <div className="w-full">
                <Label htmlFor="phone">Phone</Label>
                <Input type="text" name="phone" id="phone" defaultValue={props.company?.phone??""} placeholder=" Enter Phone" required={false}></Input>
            </div>
            <div className="w-full">
                <Label htmlFor="mobile">Mobile</Label>
                <Input type="text" name="mobile" id="mobile" defaultValue={props.company?.mobile??""} placeholder=" Enter Mobile" required={false}></Input>
            </div>
            <div className="w-full">
                <Label htmlFor="fax">Fax</Label>
                <Input type="text" name="fax" id="fax" defaultValue={props.company?.fax??""} placeholder=" Enter Fax" required={false}></Input>
            </div>
            <div className="w-full">
                <Label htmlFor="email">Email</Label>
                <Input type="text" name="email" id="email" defaultValue={props.company?.email??""} placeholder=" Enter Email" required={false}></Input>
            </div>
            </div>
            <div className="flex items-center space-x-4">
            <SubmitButton>
                Update company
            </SubmitButton>
            </div>
        </form>
        ) : ("")}
    </>
  )
}