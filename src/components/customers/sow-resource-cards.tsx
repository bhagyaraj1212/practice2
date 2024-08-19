'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { deleteSOWResource } from "@/src/actions/sowResource";
import { SOWResource } from "@/types";  
import { usePathname } from "next/navigation";
import { DeleteButton } from "../ui/delete-button";

type props = {
    sowResouces: SOWResource[]
} 
export default function SOWResourceCards( props: props ) {    
    const pathname = usePathname()
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">        
            {props.sowResouces.map(sowResource => (
            <Card className="m-1 hover:bg-accent" key={sowResource.id}>
                <CardHeader>
                    <CardTitle>{sowResource.resource?.name}</CardTitle>
                    <CardDescription>{sowResource.projectRole?.role}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <span className="overflow-hidden text-ellipsis pr-1">{sowResource.resource?.email}</span>
                    <div className="h-2">
                    {sowResource?.billingRate ? 
                        <>
                        Bill Rate:
                        <span className="text-green-600 ml-2">{new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(sowResource?.billingRate)}/hr</span></>
                        :
                        " "
                    }
                    </div>
                </CardContent>
                <CardFooter>
                    <form action={async (formData) => {
                        await deleteSOWResource(formData)
                        }} >
                            <input type="hidden" name="id" value={sowResource.id} />
                            <input type="hidden" name="pathname" value={pathname} />
                            <DeleteButton>
                                Remove
                            </DeleteButton>
                            
                    </form>
                </CardFooter>
            </Card>            
        ))}
        </div>
    );
}