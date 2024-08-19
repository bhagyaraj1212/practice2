'use client';
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,  
  DialogContent,  
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Children {
    children: React.ReactNode;
}

export const AddDialog : React.FC< Children> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-cyan-600 hover:bg-cyan-600/90 text-white hover:text-white"><i className='fa fa-add mr-2' />Add New</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
                <DialogTitle>Add project</DialogTitle>              
            </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    </>
  )
}