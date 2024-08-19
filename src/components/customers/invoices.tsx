'use client';
import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Invoice } from '@/types'
import { useSearchParams } from 'next/navigation'
import InvoiceCards from '@/components/customers/invoice-cards';

type props = {
  invoices?: Invoice[] | null;
}
export default function Invoices(props: props) {    
  const searchParams = useSearchParams();
  return (
    <>
        <div className="w-full mb-2">
            <Link href={{
            pathname: 'invoice',
            query: new URLSearchParams(Array.from(searchParams.entries())).toString()
            }}>
            <Button variant="outline" className="bg-cyan-600 hover:bg-cyan-600/90 text-white hover:text-white mb-2 lg:ml-1"><i className='fa fa-add mr-2' />Add New Invoice</Button>
            </Link>        
            { (props.invoices == undefined) ?
                <div className= "bg-muted rounded-lg h-9 w-48 text-center">
                    <h2 className="text-green-600 font-semibold text-small p-2">No invoices to display</h2>
                </div>
                :
                <>       
                <div className="flex border ml-1 mr-4 mt-3 w-5/6">
                    <div className="bg-muted px-5 flex items-center border-e">
                        <i className="fa-solid fa-file-invoice text-3xl text-cyan-600"></i>
                    </div>
                    <div className="flex">
                        <div className='px-4 py-2 hover:bg-muted'>
                            <div className="text-base">
                                #410500
                            </div>
                            <div className="text-gray-500 text-xs">
                                BitRip UI/UX Audit and Redesign - SOW #001
                            </div>
                            <div className="text-gray-500 text-xs">
                                Tom Blank
                            </div>
                            <div className="text-gray-500 text-xs">
                                tom.blank@bitrip.com
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                Jan 17, 2024
                            </div>
                            <div className="text-gray-400 text-xs">
                                Date
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                $10,000.00
                            </div>
                            <div className="text-gray-400 text-xs">
                                Amount
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                Mar 17, 2024
                            </div>
                            <div className="text-gray-400 text-xs">
                                Due
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                $0.00
                            </div>
                            <div className="text-gray-400 text-xs">
                                Paid
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                <i className="fa-solid fa-file-invoice-dollar text-xl text-green-600"></i>
                            </div>
                            <div className="text-gray-400 text-xs">
                                Mark as paid
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                <i className="fa fa-edit text-xl text-cyan-600"></i>
                            </div>
                            <div className="text-gray-400 text-xs">
                                Edit
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex border ml-1 mr-4 mt-3 w-5/6">
                    <div className="bg-muted px-5 flex items-center border-e">
                        <i className="fa-solid fa-file-invoice-dollar text-3xl text-green-600"></i>
                    </div>
                    <div className="flex">
                        <div className='px-4 py-2 hover:bg-muted'>
                            <div className="text-base">
                                #410500
                            </div>
                            <div className="text-gray-500 text-xs">
                                BitRip UI/UX Audit and Redesign - SOW #001
                            </div>
                            <div className="text-gray-500 text-xs">
                                Tom Blank
                            </div>
                            <div className="text-gray-500 text-xs">
                                tom.blank@bitrip.com
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                Jan 17, 2024
                            </div>
                            <div className="text-gray-400 text-xs">
                                Date
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                $10,000.00
                            </div>
                            <div className="text-gray-400 text-xs">
                                Amount
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                Mar 17, 2024
                            </div>
                            <div className="text-gray-400 text-xs">
                                Due
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                $10,000.00
                            </div>
                            <div className="text-gray-400 text-xs">
                                Paid
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                <i className="fa-solid fa-file-invoice-dollar text-xl text-gray-300"></i>
                            </div>
                            <div className="text-gray-400 text-xs">
                                Mark as paid
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                <i className="fa fa-edit text-xl text-cyan-600"></i>
                            </div>
                            <div className="text-gray-400 text-xs">
                                Edit
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex border ml-1 mr-4 mt-3 w-5/6">
                    <div className="bg-muted px-5 flex items-center border-e">
                        <i className="fa-solid fa-file-invoice text-3xl text-orange-500"></i>
                    </div>
                    <div className="flex">
                        <div className='px-4 py-2 hover:bg-muted'>
                            <div className="text-base">
                                #410500
                            </div>
                            <div className="text-gray-500 text-xs">
                                BitRip UI/UX Audit and Redesign - SOW #001
                            </div>
                            <div className="text-gray-500 text-xs">
                                Tom Blank
                            </div>
                            <div className="text-gray-500 text-xs">
                                tom.blank@bitrip.com
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                Jan 17, 2024
                            </div>
                            <div className="text-gray-400 text-xs">
                                Date
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                $10,000.00
                            </div>
                            <div className="text-gray-400 text-xs">
                                Amount
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                Mar 17, 2024
                            </div>
                            <div className="text-gray-400 text-xs">
                                Due
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                $5000.00
                            </div>
                            <div className="text-gray-400 text-xs">
                                Paid
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                <i className="fa-solid fa-file-invoice-dollar text-xl text-green-600"></i>
                            </div>
                            <div className="text-gray-400 text-xs">
                                Mark as paid
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                <i className="fa fa-edit text-xl text-cyan-600"></i>
                            </div>
                            <div className="text-gray-400 text-xs">
                                Edit
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex border ml-1 mr-4 mt-3 w-5/6">
                    <div className="bg-muted px-5 flex items-center border-e">
                        <i className="fa-solid fa-file-invoice text-3xl text-red-700"></i>
                    </div>
                    <div className="flex">
                        <div className='px-4 py-2 hover:bg-muted'>
                            <div className="text-base">
                                #410500
                            </div>
                            <div className="text-gray-500 text-xs">
                                BitRip UI/UX Audit and Redesign - SOW #001
                            </div>
                            <div className="text-gray-500 text-xs">
                                Tom Blank
                            </div>
                            <div className="text-gray-500 text-xs">
                                tom.blank@bitrip.com
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                Jan 17, 2024
                            </div>
                            <div className="text-gray-400 text-xs">
                                Date
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                $10,000.00
                            </div>
                            <div className="text-gray-400 text-xs">
                                Amount
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                Mar 17, 2024
                            </div>
                            <div className="text-gray-400 text-xs">
                                Due
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                $0.00
                            </div>
                            <div className="text-gray-400 text-xs">
                                Paid
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                <i className="fa-solid fa-file-invoice-dollar text-xl text-green-600"></i>
                            </div>
                            <div className="text-gray-400 text-xs">
                                Mark as paid
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2 px-3 min-w-32 hover:bg-muted'>
                            <div className="text-gray-800 text-sm mb-1">
                                <i className="fa fa-edit text-xl text-cyan-600"></i>
                            </div>
                            <div className="text-gray-400 text-xs">
                                Edit
                            </div>
                        </div>
                    </div>
                </div>         
                </>
            }
        </div>
    </>
  )
}