// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      token: {
        accessToken: string;
        refreshToken: string;
        accessTokenExp: number;
      };
      error?: string;
    };
  }
  interface User {
    token: {
      accessToken: string;
      refreshToken: string;
      accessTokenExp: number;
    };
    error?: string;
  }
}
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken: string;
    accessTokenExp: number;
    refreshToken: string;
    error?: string;
  }
}
