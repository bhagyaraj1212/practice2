import { getCompanyData } from "@/src/actions/company"

interface CompaniesSelectProps {
    companyId: string
}

export default async function CompaniesSelect(props: CompaniesSelectProps) {  
    
    const companies = await getCompanyData();
    return (
        <select id="companyId" name="companyId" defaultValue={props.companyId} className="p-1.5 border rounded-md shadow-sm w-full">
            {companies.map( company => (
                <option key={company?.id} value={company?.id}>{company?.name}</option>
            ))}
        </select>
    );
}
  