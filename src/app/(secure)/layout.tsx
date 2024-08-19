import type { Metadata } from 'next'
import BreadCrumb from '@/components/ui/bread-crumb'
import NextAuthProvider from '@/components/nav/next-auth-provider';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SideNav from '@/components/nav/side-nav'
import { getServerSession } from "next-auth";
import { authOptions } from '@/utils/auth'
import "../globals.css"
import Logout from '@/components/nav/logout';
import { getCustomerData } from '@/src/actions/customer';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Craft by Symphonize',
  description: 'Symphonize project finances',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  const customers = await getCustomerData(); 

  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/9bf550f8ab.js" crossOrigin="anonymous" async></script>
      </head>
      <body>
        <NextAuthProvider>
          <div className="content md:flex">
            <SideNav customers={customers} />
            <main className="w-full sm:flex-1 md:min-h-screen bg-[#fff]">
              <div className="flex justify-between pr-5 p-1 bg-[#f9f9f9]">
                <BreadCrumb
                  homeElement={'Home'}
                  separator={<i className='fa fa-chevron-right' />}
                  activeClasses='text-green-600'
                  containerClasses='p-2 flex text-gray-700 text-xs items-center bg-[#f9f9f9] mx-2' 
                  listClasses='hover:underline mx-2'
                  capitalizeLinks
                />
                <Logout />
              </div>
              {children}
            </main>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}