'use client';
import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SOWResourceCards from '@/components/customers/sow-resource-cards'
import { StatementOfWork } from '@/types'
import { useSearchParams } from 'next/navigation'
type props = {
  statementOfWork?: StatementOfWork | null;
}

export default function SOWResources(props: props) {    
  const searchParams = useSearchParams();
  return (
    <>
      { (props.statementOfWork == undefined || props.statementOfWork.name == "")    ?
        <div className= "ml-4bg-muted rounded-lg h-9">
          <h2 className="text-green-600 font-semibold text-small p-2">Please select an SOW</h2>
        </div>
        :
        <div className= "w-full md:ml-3 xl:mb-3">
          <div className="flex mb-1 xl:mb-0 xl:ml-1 w-auto rounded-lg bg-gray-100 xl:bg-gray-50">
            <div className="bg-muted px-5 py-4 flex items-center rounded-lg mt-1 mr-1 xl:mr-0 xl:mt-0 bg-gray-50">
                <i className= {clsx(props.statementOfWork?.active ? 'fa-solid fa-file-circle-check text-green-600 text-2xl' : 'fa-solid fa-file-circle-minus text-gray-500')} ></i>
            </div>
            <div className="xl:flex xl:w-auto w-full">
                <div className='h-20 py-6 xl:px-4 xl:py-4 hover:bg-muted flex items-center justify-center bg-gray-50 mb-1 mt-1 xl:mt-0 xl:mb-0'>
                    <div className="text-base text-green-600">
                      <Link href={props.statementOfWork?.fileLocation?? ""} target="__blank">
                          {props.statementOfWork?.name}<i className=" ml-2 fa-solid fa-up-right-from-square"></i>
                      </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-1 xl:flex xl:w-auto w-full">
                  <div className='h-20 flex flex-col justify-center items-center xl:ml-2 px-4 py-4 xl:w-auto min-w-32 hover:bg-muted bg-gray-50'>
                      <div className="text-gray-800 text-sm mb-1">
                          {props.statementOfWork?.startDate?.toDateString()}
                      </div>
                      <div className="text-gray-400 text-xs">
                          Start Date
                      </div>
                  </div>
                  <div className='h-20 flex flex-col justify-center items-center xl:ml-2 px-4 py-4 xl:w-auto min-w-32 hover:bg-muted bg-gray-50'>
                      <div className="text-gray-800 text-sm mb-1">
                          {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(props.statementOfWork?.value)}
                      </div>
                      <div className="text-gray-400 text-xs">
                          Value
                      </div>
                  </div>
                  <div className='h-20 flex flex-col justify-center items-center xl:ml-2 px-4 py-4 xl:w-auto min-w-32 hover:bg-muted bg-gray-50'>
                      <div className="text-gray-800 text-sm mb-1">
                          {props.statementOfWork?.endDate?.toDateString()}
                      </div>
                      <div className="text-gray-400 text-xs">
                          End Date
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="md:mb-2">
            <h2 className="text-green-600 font-semibold text-base mb-2 lg:ml-3">Resources</h2>
            <Link href={{
              pathname: 'resource',
              query: new URLSearchParams(Array.from(searchParams.entries())).toString()
            }}>
              <Button variant="outline" className="bg-cyan-600 hover:bg-cyan-600/90 text-white hover:text-white mb-2 lg:ml-1"><i className='fa fa-add mr-2' />Add New</Button>
            </Link>        
            <SOWResourceCards sowResouces={props.statementOfWork?.sowResources?? []} />
          </div>
        </div>
      }      
    </>
  )
}