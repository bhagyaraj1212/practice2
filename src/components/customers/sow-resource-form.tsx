'use client'
import { SubmitButton } from '@/components/ui/submit-button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProjectRole, Resource, SOWResource } from '@/types'
import { useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { addSOWResource } from '@/src/actions/sowResource'

interface SOWResourceFormProps {
  sowResource: SOWResource;
  resources: Resource[];
  projectRoles: ProjectRole[];
  customerName: string;
}

export const SOWResourceForm: React.FC<SOWResourceFormProps> = ({ sowResource, resources, projectRoles, customerName }) => {  

  const searchParams = useSearchParams();
  const pathname = `/customers/${customerName}?` + new URLSearchParams(Array.from(searchParams.entries())).toString();
  console.log(pathname);
  return (    
    <form action={async (formData) => {
      await addSOWResource(formData)
    }} >
      <input type="hidden" name="sowId" value={sowResource?.sowId} />
      <input type="hidden" name="pathname" value={pathname} />
      <div className="grid gap-2 mb-4 sm:grid-cols-2 sm:gap-3 sm:mb-5">
        <div className="w-full">
          <Label htmlFor="resourceId">Resource</Label>
          <select id="resourceId" name="resourceId" className="p-1.5 border rounded-md shadow-sm w-full">
            {resources.map( resource => (
                <option key={resource?.id} value={resource?.id}>{resource?.name}</option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <Label htmlFor="projectRoleId">Project Role</Label>
          <select id="projectRoleId" name="projectRoleId" className="p-1.5 border rounded-md shadow-sm w-full">
            {projectRoles.map( projectRole => (
                <option key={projectRole?.id} value={projectRole?.id}>{projectRole?.role}</option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <Label htmlFor="billingRate">Billing Rate</Label>
          <Input type="text" name="billingRate" id="billingRate" placeholder=" Enter billing rate" required={false}></Input>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SubmitButton>
          Add Resource
        </SubmitButton>
        <Link href={{pathname: `/customers/${customerName}`,
          query: new URLSearchParams(Array.from(searchParams.entries())).toString()
        }}>
          <Button variant="outline" >
            <i className='fa fa-undo mr-2' />Return
          </Button>
        </Link>
      </div>      
    </form>
  )
}