import { getProjectData } from "@/src/actions/project"

interface ProjectsSelectProps {
    projectId: string
}

export default async function ProjectsSelect(props: ProjectsSelectProps) {  
    
    const projects = await getProjectData();
    return (
        <select id="projectId" name="projectId" defaultValue={props.projectId} className="p-1.5 border rounded-md shadow-sm w-full">
            {projects.map( project => (
                <option key={project?.id} value={project?.id}>{project?.name}</option>
            ))}
        </select>
    );
}
  