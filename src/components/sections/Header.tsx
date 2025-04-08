"use client";

import { useMeInfo } from "@/hooks/useMeInfo";
import { LanguageDropdown } from "@/ui/Dropdown/LanguageDropdown";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations();
  const meInfo = useMeInfo();
  return (
    <div className="h-[110px] w-full sticky top-0 bg-gradient-to-b from-[#FAF8F9] to-[#FBF9FA] border-b border-[#E4E4E7] px-[34px] py-[30px] flex items-center justify-between">
      <div className="flex items-center gap-[70px]">
        <div className="">
          <p className="text-[14px] font-bold text-black">
            {t("header.systemTime")}
          </p>
          <p className="text-[14px] font-light text-[#313131]">
            28.04.2020 17:42:38
          </p>
        </div>
        <div className="">
          <p className="text-[14px] font-bold text-black">{t("header.user")}</p>
          <p className="text-[14px] font-light text-[#313131]">
            {meInfo.data?.email || "-"}
          </p>
        </div>
        <div className="">
          <p className="text-[14px] font-bold text-black">
            {t("header.uniqId")}
          </p>
          <p className="text-[14px] font-light text-[#313131]">
            {meInfo.data?.id || "-"}
          </p>
        </div>
      </div>
      <div className="flex items-center w-max gap-5">
        <LanguageDropdown />
        <button
          onClick={() => {
            signOut({
              redirect: true,
            });
          }}
          className="h-10 rounded-[10px] bg-[#6233E0] text-white text-center w-[89px] cursor-pointer"
        >
          <p className="text-[14px] font-medium">{t("header.logOut")}</p>
        </button>
      </div>
    </div>
  );
};
