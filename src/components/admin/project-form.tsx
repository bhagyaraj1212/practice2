'use client'
import React from 'react'
import { SubmitButton } from '@/components/ui/submit-button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { addProject, updateProject } from "@/actions/project";
import { FormType, Project } from '@/types'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ProjectFormProps {
  project: Project;  
  formType: FormType;
}

interface Children {
  children: React.ReactNode;
}

export const ProjectForm: React.FC<ProjectFormProps & Children> = ({ project, formType, children }) => {
  return (    
    <form action={async (formData) => {                
        if(formType == "Add")
          await addProject(formData) 
        else
          await updateProject(formData)   
    }} >
      <input type="hidden" name="id" value={project?.id} />                  
      <div className="grid gap-2 mb-4 sm:grid-cols-2 sm:gap-3 sm:mb-5">
        <div className="w-full">
          <Label htmlFor="customerId">Customer</Label>
          {children}
        </div>
        <div className="w-full">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" defaultValue={project?.name} placeholder="Enter Project Name" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="federalTaxId">Manager</Label>
          <Input type="text" name="manager" id="manager" defaultValue={project?.manager??""} placeholder=" Enter Project Manager's Name" required={false}></Input>
        </div>        
        <div className="w-full">
          <Label htmlFor="email">Email</Label>
          <Input type="text" name="email" id="email" defaultValue={project?.email??""} placeholder=" Enter Project Manager's Email" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" defaultValue={project?.phone??""} placeholder=" Enter Project Manager's Phone" required={false}></Input>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SubmitButton>
        {formType == 'Add' ? 'Add project' : 'Update project'}
        </SubmitButton>
        <Link href={'/admin/projects'}>
          <Button variant="outline" >
            <i className='fa fa-undo mr-2' />Return
          </Button>
        </Link>
      </div>
    </form>     
  )
}