import { getResourceData } from "@/src/actions/resource"

interface ResourcesSelectProps {
    resourceId: string
}

export default async function ResourcesSelect(props: ResourcesSelectProps) {  
    
    const resources = await getResourceData();
    return (
        <select id="resourceId" name="resourceId" defaultValue={props.resourceId} className="p-1.5 border rounded-md shadow-sm w-full">
            {resources.map( resource => (
                <option key={resource?.id} value={resource?.id}>{resource?.name}</option>
            ))}
        </select>
    );
}
  