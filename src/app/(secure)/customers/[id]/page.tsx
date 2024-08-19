import Title from "@/components/ui/title";
import ProjectsSOWs from "@/components/customers/projects-sows";
import { fetchProjectsByCustomer } from "@/src/actions/project";
import { Customer, Invoice, Project } from "@/types";
import { fetchCustomer } from "@/src/actions/customer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Invoices from '@/components/customers/invoices';
import { getInvoiceByCustomer } from "@/src/actions/invoice";

export default async function CustomerPage({params, searchParams}: {
    params: {id: string}
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const projects: Project[] = await fetchProjectsByCustomer(searchParams?.id == undefined ? "" : Array.isArray(searchParams?.id) ? "" : searchParams?.id);
    const customer: Customer = await fetchCustomer(searchParams?.id == undefined ? "" : Array.isArray(searchParams?.id) ? "" : searchParams?.id);
    const invoices: Invoice[] = await getInvoiceByCustomer(searchParams?.id == undefined ? "" : Array.isArray(searchParams?.id) ? "" : searchParams?.id);
  return (
    <>
      <Title title={customer.name.replace(/%20/g, ' ')}></Title>
      <Tabs defaultValue="projects-sows" className="space-y-4 pl-4">
        <TabsList>
          <TabsTrigger value="projects-sows">
            Projects & SOWs
          </TabsTrigger>
          <TabsTrigger value="invoices">
            Invoices
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects-sows" className="space-y-4">
          <ProjectsSOWs projects={projects}></ProjectsSOWs>
        </TabsContent>
        <TabsContent value="invoices" className="space-y-4">
          <Invoices invoices={invoices}></Invoices>
        </TabsContent>
      </Tabs>
    </>
  )
}