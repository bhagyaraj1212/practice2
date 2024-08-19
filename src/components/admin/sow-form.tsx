'use client'
import { SubmitButton } from '@/components/ui/submit-button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { FormType, StatementOfWork } from '@/types'
import { addSOW, updateSOW } from '@/src/actions/sow';
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns" 
import { cn } from "@/src/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react'

interface SOWFormProps {
  statementOfWork: StatementOfWork;
  formType: FormType;
}

interface Children {
  children: React.ReactNode;
}

export const SOWForm: React.FC<SOWFormProps & Children> = ({ statementOfWork, formType, children }) => {
  
  const [active, setActive] = useState<boolean>(statementOfWork.active?? false);
  function setSOWActive(sowActive: boolean){
    statementOfWork.active = sowActive;
    setActive(sowActive);
  }
  const [startDate, setStartDate] = useState<Date | null>(statementOfWork.startDate??null);
  function setSOWStartDate(sowStartDate: Date | undefined){    
    statementOfWork.startDate = sowStartDate == undefined ? null : sowStartDate;    
    (document.getElementsByName("startDate")[0] as HTMLInputElement).value = sowStartDate == undefined ? "" : sowStartDate?.toDateString();
    setStartDate(sowStartDate == undefined ? null : sowStartDate);
  }
  const [endDate, setendDate] = useState<Date | null>(statementOfWork.endDate??null);
  function setSOWEndDate(sowEndDate: Date | undefined){
    statementOfWork.endDate = sowEndDate == undefined ? null : sowEndDate;
    (document.getElementsByName("endDate")[0] as HTMLInputElement).value = sowEndDate == undefined ? "" : sowEndDate?.toDateString();
    setendDate(sowEndDate?? null);
  }

  return (    
    <form action={async (formData) => {                
      if(formType == "Add")
        await addSOW(formData) 
      else
        await updateSOW(formData) 
    }} >
      <input type="hidden" name="id" value={statementOfWork?.id} />  
      <div className="grid gap-2 mb-4 sm:grid-cols-2 sm:gap-3 sm:mb-5">
        <div className="w-full">
          <Label htmlFor="compnayId">Project</Label>
          {children}
        </div>                      
        <div className="w-full">
          <Label htmlFor="name">Title</Label>
          <Input type="text" name="name" id="name" defaultValue={statementOfWork?.name} placeholder="Enter Title" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="startDate">Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : <span>Pick a Start Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate?? undefined}
                onSelect={setSOWStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <input type="hidden" name="startDate" value={statementOfWork?.startDate?.toDateString()} />  
        </div>
        <div className="w-full">
          <Label htmlFor="endDate">End Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Pick an End Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate?? undefined}
                onSelect={setSOWEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <input type="hidden" name="endDate" value={statementOfWork?.endDate?.toDateString()} /> 
        </div>
        <div className="w-full">
          <Label htmlFor="value">$ Value</Label>
          <Input type="text" name="value" id="value" defaultValue={statementOfWork?.value?.toString()} placeholder=" Enter a $ Value" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="fileLocation">Executed SOW Link</Label>
          <Input type="text" name="fileLocation" id="fileLocation" defaultValue={statementOfWork?.fileLocation??""} placeholder=" Enter Executed SOW Link" required={false}></Input>
        </div>
        <div className="w-full">
          <Label htmlFor="active">Active</Label>
          <Checkbox checked={active} onCheckedChange={setSOWActive} name="active" id="active"/>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SubmitButton>
          {formType == 'Add' ? 'Add SOW' : 'Update SOW'}
        </SubmitButton>
        <Link href={'/admin/sows'}>
          <Button variant="outline" >
            <i className='fa fa-undo mr-2' />Return
          </Button>
        </Link>
      </div>      
    </form>
  )
}