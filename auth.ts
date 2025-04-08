/* eslint-disable @typescript-eslint/no-unused-vars */
import { authOptions } from "@/lib/options";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the jwt callback and auth, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}

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

  interface JWT {
    accessToken: string;
    accessTokenExp: number;
    refreshToken: string;
    error?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
