import PoweredBy from "@/components/nav/powered-by"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/auth"
import { redirect } from "next/navigation"
import SignInForm from "@/src/components/auth/sign-in-form"

export default async function signInPage() {

  const session = await getServerSession(authOptions)
  if(session)
    return redirect("/")

  return ( 
    <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto min-h-screen lg:py-0">
      <h1 className="text-4xl mb-5 font-bold leading-tight tracking-tight text-gray-900 md:text-4xl ">Craft</h1>
      <div className="w-full bg-white rounded-lg border border-purple-400 md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="flex flex-col p-6 space-y-4 items-center justify-center md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
            </h1>
            <SignInForm/> 
        </div>
      </div>
      <div className="powered-by ">
        <PoweredBy />
      </div>
    </div>
  )
}