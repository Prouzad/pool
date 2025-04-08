"use client";
import { MailIcon, PassIcon } from "@/assets/icons";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";

export const SignUpComponent = () => {
  const t = useTranslations("auth");
  return (
    <div className="w-[427px] rounded-[40px] bg-white border border-[#E4E4E7] px-[52px] pt-[54px] pb-[29px]">
      <p className="text-4xl font-medium w-full text-center flex items-center justify-center cursor-default">
        {t("signUp")}
      </p>
      <div className="mt-20 flex flex-col items-center gap-4">
        <Controller
          name="email"
          render={({ field, fieldState }) => (
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-4 p-2.5 border-b border-[#E4E4E7]">
                <div className="">
                  <MailIcon />
                </div>
                <input
                  {...field}
                  type="email"
                  className="w-4/5 border-0 ring-0 outline-0 placeholder:text-center"
                  placeholder={t("enter_email")}
                />
              </div>
              {fieldState.error && fieldState.error.message && (
                <div className="text-red-500 text-xs mt-1">
                  {t(fieldState.error.message)}
                </div>
              )}
            </div>
          )}
        />
        <Controller
          name="password"
          render={({ field, fieldState }) => (
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-4 p-2.5 border-b border-[#E4E4E7]">
                <div className="">
                  <PassIcon />
                </div>
                <input
                  {...field}
                  type="password"
                  className="w-4/5 border-0 ring-0 outline-0 placeholder:text-center"
                  placeholder={t("enter_password")}
                />
              </div>
              {fieldState.error && fieldState.error.message && (
                <div className="text-red-500 text-xs mt-1">
                  {t(fieldState.error.message)}
                </div>
              )}
            </div>
          )}
        />
        <Controller
          name="confirm_password"
          render={({ field, fieldState }) => (
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-4 p-2.5 border-b border-[#E4E4E7]">
                <div className="">
                  <PassIcon />
                </div>
                <input
                  {...field}
                  type="password"
                  className="w-4/5 border-0 ring-0 outline-0 placeholder:text-center"
                  placeholder={t("confirm_password")}
                />
              </div>
              {fieldState.error && fieldState.error.message && (
                <div className="text-red-500 text-xs mt-1">
                  {t(fieldState.error.message)}
                </div>
              )}
            </div>
          )}
        />
      </div>
      <div className="mt-[57px] flex flex-col items-center">
        <button
          type="submit"
          className="w-[322px] h-[50px] rounded-[30px] bg-[#6233E0] cursor-pointer"
        >
          <p className="text-white font-medium text-base">{t("signUp")}</p>
        </button>
        <Link href="/" className="text-[14px] text-black mt-[3px] h-[29px]">
          {t("signIn")}
        </Link>
        <Link
          href="/forgot-password"
          className="text-[14px] text-[#6233E0] mt-[3px] h-[29px]"
        >
          {t("forgot_password")}
        </Link>
      </div>
    </div>
  );
};
