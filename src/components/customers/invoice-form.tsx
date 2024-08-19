'use client'
import { SubmitButton } from '@/components/ui/submit-button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Invoice, ProjectRole, Resource, SOWResource } from '@/types'
import { useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'

interface InvoiceFormProps {
  invoice: Invoice;
  sowResources: SOWResource[];  
  customerName: string;
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({ invoice, sowResources, customerName }) => {  

  const searchParams = useSearchParams();
  const pathname = `/customers/${customerName}?` + new URLSearchParams(Array.from(searchParams.entries())).toString();  
  return (    
    <form action={async (formData) => {
      
    }} >      
      <input type="hidden" name="pathname" value={pathname} />
      <div className="grid gap-2 mb-4 sm:grid-cols-2 sm:gap-3 sm:mb-5">
        
        
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