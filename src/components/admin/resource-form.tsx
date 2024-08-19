'use client'
import { SubmitButton } from '@/components/ui/submit-button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { addResource, updateResource } from "@/actions/resource";
import { FormType, Resource } from '@/types'
import { Button } from "@/components/ui/button"
import Link from 'next/link';

interface ResourceFormProps {
  resource: Resource;
  formType: FormType;
}

interface Children {
  children: React.ReactNode;
}

export const ResourceForm: React.FC<ResourceFormProps & Children> = ({ resource, formType, children }) => {

  return (
    
    <form action={async (formData) => {                
      if(formType == "Add")
        await addResource(formData) 
      else
        await updateResource(formData) 
    }} >
      <input type="hidden" name="id" value={resource?.id} />  
      <div className="grid gap-2 mb-4 sm:grid-cols-2 sm:gap-3 sm:mb-5">
        <div className="w-full">
          <Label htmlFor="compnayId">Company</Label>
          {children}
        </div>                      
        <div className="w-full">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" defaultValue={resource?.name} placeholder="Enter Name" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="federalTaxId">Federal Tax Id</Label>
          <Input type="text" name="federalTaxId" id="federalTaxId" defaultValue={resource?.federalTaxId??""} placeholder=" Enter Federal Tax Id" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="address1">Address 1</Label>
          <Input type="text" name="address1" id="address1" defaultValue={resource?.address1??""} placeholder=" Enter Address 1" required={false}></Input>
        </div>              
        <div className="w-full">
          <Label htmlFor="address2">Address 2</Label>
          <Input type="text" name="address2" id="address2" defaultValue={resource?.address2??""} placeholder=" Enter Address 2" required={false}></Input>
        </div> 
        <div className="w-full">
          <Label htmlFor="city">City</Label>
          <Input type="text" name="city" id="city" defaultValue={resource?.city??""} placeholder=" Enter City" required={false}></Input>
        </div>              
        <div className="w-full">
          <Label htmlFor="state">State</Label>
          <Input type="text" name="state" id="state" defaultValue={resource?.state??""} placeholder=" Enter State" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="zip">Zip</Label>
          <Input type="text" name="zip" id="zip" defaultValue={resource?.zip??""} placeholder=" Enter Zip" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" defaultValue={resource?.phone??""} placeholder=" Enter Phone" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="mobile">Mobile</Label>
          <Input type="text" name="mobile" id="mobile" defaultValue={resource?.mobile??""} placeholder=" Enter Mobile" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="fax">Fax</Label>
          <Input type="text" name="fax" id="fax" defaultValue={resource?.fax??""} placeholder=" Enter Fax" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="email">Email</Label>
          <Input type="text" name="email" id="email" defaultValue={resource?.email??""} placeholder=" Enter Email" required={false}></Input>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SubmitButton>
          {formType == 'Add' ? 'Add resource' : 'Update resource'}
        </SubmitButton>
        <Link href={'/admin/resources'}>
          <Button variant="outline" >
            <i className='fa fa-undo mr-2' />Return
          </Button>
        </Link>
      </div>      
    </form>
  )
}