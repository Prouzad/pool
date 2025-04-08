"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/utils/twMerge";
import { NAVIGATION_BAR_LIST } from "@/components/sections/_data";
import logo from "@/assets/images/logo.png";
import { useTranslations } from "next-intl";
export const Sidebar = () => {
  const t = useTranslations();
  const path = usePathname();
  return (
    <div className="h-screen sticky top-0 p-[38px] w-[341px] bg-gradient-to-b from-[#EBEEF5] to-[#F3F4F6] border-r border-[#E4E4E7]">
      <div className="flex items-center gap-3 cursor-pointer mb-[46px]">
        <Image src={logo.src} width={40} height={40} alt="logo" />
        <p className="text-2xl font-bold">Pool</p>
      </div>
      <div className="flex flex-col gap-2">
        {NAVIGATION_BAR_LIST.map((item) => (
          <Link
            href={`/account/${item.url}`}
            key={item.id}
            className={cn(
              "flex items-center gap-4 h-[62px] w-[262px] px-[17px] py-5 rounded-[10px] text-[#727288] hover:bg-[#ffffff6a]",
              path.includes(item.url) &&
                "!bg-[#F9FAFC] text-[#6233E0] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.12)]"
            )}
          >
            <item.icon />
            <p
              className={cn(
                "text-base font-medium text-[#727288]",
                path.includes(item.url) && "!text-black"
              )}
            >
              {t(item.title)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
