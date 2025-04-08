"use client";

import React, { useEffect } from "react";

import { Header } from "@/components/sections/Header";
import { Sidebar } from "@/components/sections/Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const lang = useLocale();

  useEffect(() => {
    if (
      session?.user.error === "refresh_token_expired" ||
      status === "unauthenticated"
    ) {
      redirect({
        href: {
          pathname: "/",
        },
        locale: lang,
      });
    }
  }, [session?.user.error, status]);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-[34px]">{children}</div>
      </div>
    </div>
  );
}
