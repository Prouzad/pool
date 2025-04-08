"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
