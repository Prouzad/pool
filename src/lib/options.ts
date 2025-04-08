/* eslint-disable @typescript-eslint/no-explicit-any */
import { refreshToken, signIn } from "@/services/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";
import { NextAuthConfig } from "next-auth";

export const authOptions: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(
        credentials: Partial<Record<"email" | "password", unknown>> | undefined
      ) {
        if (
          !credentials ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          return null;
        }

        const { email, password } = credentials;
        try {
          const res = await signIn({
            email,
            password,
            lang: "en",
          });

          if (res.status !== 200) {
            throw new Error(res.data?.message || "Invalid credentials");
          }

          const data = res.data;

          return {
            id: data.user_id || "default-id",
            token: {
              accessToken: data.access_token,
              refreshToken: data.refresh_token,
              accessTokenExp: Math.floor(
                new Date(data.access_token_expires).getTime() / 1000
              ),
            },
          };
        } catch (err: any) {
          const errorMessage =
            err.response?.data?.message || err.message || "An error occurred";
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        const { exp } = jwtDecode(user.token.accessToken) as any;

        return {
          ...user,
          accessToken: user.token.accessToken,
          accessTokenExp: exp,
          refreshToken: user.token.refreshToken,
        };
      }

      return token;

      const res = await refreshToken("token");

      return res;
    },

    async session({ session, token }) {
      if (session.user && token) {
        session.user.token = {
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          accessTokenExp: token.accessTokenExp,
        };
        session.user.error = token.error;
      }
      return session;
    },
  },

  secret: "aaasasasa",
  debug: process.env.NODE_ENV !== "production",
};
