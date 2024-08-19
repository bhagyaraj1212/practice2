import { withAuth } from "next-auth/middleware";
import { EngagementManagerRoutes, ExecutiveRoutes, ProjectManagerRoutes } from "@/src/lib/routes";
 
export default withAuth(
  function middleware(req) {},
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (!token?.roles) {
          return false;
        }
       
        if (token.roles.includes('User')) {
          if (token.roles.includes('Admin')) {            
            return true;
          }
          if (token.roles.includes('Executive')) {            
            return ExecutiveRoutes.findIndex((route) => req.nextUrl.pathname.startsWith(route)) != -1;
          }
          if (token.roles.includes('ProjectManager')) {            
            return ProjectManagerRoutes.findIndex((route) => req.nextUrl.pathname.startsWith(route)) != -1;
          }
          if (token.roles.includes('EngagementManager')) {            
            return EngagementManagerRoutes.findIndex((route) => req.nextUrl.pathname.startsWith(route)) != -1;
          }
          return false;
        }
        return false;
      },
    },
  }
);
 
export const config = { matcher: ["/admin/:path*", "/customers/:path*", "/"] };