import { getCustomerData } from "@/src/actions/customer"

interface CustomersSelectProps {
    customerId: string
}

export default async function CustomersSelect(props: CustomersSelectProps) {  
    
    const customers = await getCustomerData();
    return (
        <select id="customerId" name="customerId" defaultValue={props.customerId} className="p-1.5 border rounded-md shadow-sm w-full">
            {customers.map( customer => (
                <option key={customer?.id} value={customer?.id}>{customer?.name}</option>
            ))}
        </select>
    );
}
  