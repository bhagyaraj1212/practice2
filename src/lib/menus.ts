import { TreeNodeType } from '@/components/ui/treeview'

export const DashboardMenu: TreeNodeType = {
    id: '0',
    name: 'DASHBOARD',
    url: '/',
}

export const CustomerMenu: TreeNodeType = {
    id: '1',
    name: 'CUSTOMERS',
    url: '/',
}

export const AdminMenu: TreeNodeType =  {

    id: '2',
    name: 'ADMIN',
    url: '',
    children:[
        {
            id: '21',
            name: 'Company',
            url: '/admin/company',
        },
        {
            id: '22',
            name: 'Customers',
            url: '/admin/customers',
        },
        {
            id: '23',
            name: 'Resources',
            url: '/admin/resources',
        },
        {
            id: '24',
            name: 'Projects',
            url: '/admin/projects',
        },
        {
            id: '25',
            name: 'SOWs',
            url: '/admin/sows',
        },
    ]
}

export const EngagementManagerMenu: TreeNodeType =  {

    id: '2',
    name: 'ADMIN',
    url: '',
    children:[        
        {
            id: '21',
            name: 'Customers',
            url: '/admin/customers',
        },
        {
            id: '21',
            name: 'Projects',
            url: '/admin/projects',
        },
        {
            id: '22',
            name: 'SOWs',
            url: '/admin/sows',
        },
    ]
}