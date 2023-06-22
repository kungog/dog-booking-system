import NextAuth, { DefaultSession } from "next-auth"
import "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  
  interface GetSession {
    accessToken: string
    session: {
      accessToken: string
    },
    user: {
      /** The user's postal address. */
      address: string
    }
  }
}