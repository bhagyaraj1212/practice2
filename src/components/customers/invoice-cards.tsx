'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Invoice } from "@/types";  
import { usePathname } from "next/navigation";

type props = {
    invoices: Invoice[]
} 
export default function InvoiceCards( props: props ) {    
    const pathname = usePathname()
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">        
            {props.invoices.map(invoice => (
            <Card className="m-1 hover:bg-accent" key={invoice.id}>
                <CardHeader>
                    <CardTitle>{invoice.invoiceNo}</CardTitle>
                    <CardDescription>Sample Description</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    SAmple Invoice Content
                </CardContent>
                <CardFooter>
                    Status
                </CardFooter>
            </Card>            
        ))}
        </div>
    );
}