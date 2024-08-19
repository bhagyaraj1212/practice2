'use client';
import SOWResources from "@/components/customers/sow-resources";
import { TreeNodeType, Treeview } from "@/components/ui/treeview";
import { Project, StatementOfWork } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type props = {
    projects: Project[]
} 
export default function ProjectsSOWs(props: props) {   
    const router = useRouter();    
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const params = new URLSearchParams(Array.from(searchParams.entries()));    
    const [selected, select] = useState<string | null>(params.get("selected")?.toString()?? "")
    const [selectedSOW, setSelectedSOW] = useState<StatementOfWork | null | undefined>
        (props.projects.flatMap(project => project.statementsOfWork).find(sow => sow?.id == params.get("selected")?.toString()));

    const handlesowSelect = (selectedId: string) => {
        select(selectedId);
        setSelectedSOW(props.projects.flatMap(project => project.statementsOfWork).find(sow => sow?.id == selectedId));        
        params.set("selected", selectedId);
        router.push(`${pathname}${params.toString() ? `?${params.toString()}` : ""}`);
    }
    
    let projectsData: TreeNodeType[] = [];
    props.projects.map(project => {        
        let projectNode = {} as TreeNodeType;
        projectNode.id = project.id;
        projectNode.name = project.name;
        projectNode.url = '';
        let sowsData: TreeNodeType[] = [];
        project.statementsOfWork?.map(statementOfWork => {
            let sowData = {} as TreeNodeType;
            sowData.id = statementOfWork?.id;
            sowData.name = statementOfWork?.name;
            sowData.url = ''; //`/customers/${project.id}?id=${project.id}`;
            sowsData.push(sowData);
        });
        if(sowsData.length > 0) projectNode.children = sowsData;
        projectsData.push(projectNode);        
    });    
    return (
        <div className="lg:flex mr-3">
            { projectsData.length > 0 ?
                <>
                    <div className="w-full mb-3 p-3 bg-muted rounded-xl lg:w-72">
                        <Treeview.Root value={selected} onChange={handlesowSelect}
                            className="w-72 m-2 text-sm">
                            {projectsData.map(project => (
                            <Treeview.Node node={project} key={project.id} />
                            ))}
                        </Treeview.Root>
                    </div>
                    <SOWResources statementOfWork={selectedSOW}  />
                </>
                :
                <div className= "bg-muted rounded-lg">
                    <h2 className="text-green-600 font-semibold text-small p-2">No data to display</h2>
                </div>
            }
        </div>        
    );
}