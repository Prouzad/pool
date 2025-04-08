"use client";
import { NUMBER_TO_DIVIDE } from "@/lib/const";
import { Pools } from "@/services/pools/_types";
import {
  formatDateToDDMMYYYY,
  formatNumber,
  getDaysFromDateToToday,
} from "@/utils";
import { cn } from "@/utils/twMerge";
import { useTranslations } from "next-intl";

export const MePoolCard = ({
  data,
  variant = "primary",
}: {
  data: Pools;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
}) => {
  const t = useTranslations();
  return (
    <div className="w-[293px] rounded-[30px] border border-[#E4E4E7] p-[26px] flex flex-col gap-[15px] bg-white">
      <p className="font-medium text-[20px]">Trading Pool №3</p>
      <div className="border-t border-[#E4E4E7] flex flex-col gap-1 pt-3.5">
        <div className="flex items-center justify-between">
          <p className="font-medium text-[14px]">{t("launch_date")}</p>
          <p className="font-light text-base">
            {data?.created_at ? formatDateToDDMMYYYY(data?.created_at) : "-"}
          </p>
        </div>
        <p className="text-[32px] font-medium">
          {data?.deposit_amount_summ
            ? formatNumber(data?.deposit_amount_summ / NUMBER_TO_DIVIDE)
            : 0}{" "}
          USDT
        </p>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[14px] text-wrap max-w-[70%]">
            {t("number_of_days_in_operation")}
          </p>
          <p className="font-light text-base">
            {data?.created_at ? getDaysFromDateToToday(data?.created_at) : 0}{" "}
            дня
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={cn(
            "w-[240px] rounded-[30px] flex flex-col  px-[5px] pb-[5px] bg-gradient-to-b ",
            variant === "primary" &&
              "from-[#C8DBFD] to-[#FCFDFF] text-[#2D1277]",
            variant === "secondary" &&
              "from-[#FAE8CD] to-[#FFFBF7] text-[#6E614D]",
            variant === "tertiary" &&
              "from-[#FD94BE] to-[#FFE2ED] text-[#9C1C4F]"
          )}
        >
          <p className="text-[20px] font-medium mt-[20px] px-4">
            {t("profit")}
          </p>
          <p className="text-[32px] font-medium px-4">
            {data?.current_amount
              ? formatNumber(data?.current_amount / NUMBER_TO_DIVIDE)
              : 0}{" "}
            USDT
          </p>

          <button
            className={cn(
              "rounded-[20px] w-full h-10 text-white mt-2 cursor-pointer",
              variant === "primary" && "bg-[#6233E0]",
              variant === "secondary" && "bg-[#E0A449]",
              variant === "tertiary" && "bg-[#E03378]"
            )}
          >
            {t("withdraw_funds")}
          </button>
        </div>
        <button
          className={cn(
            "rounded-[20px] border h-10 w-full cursor-pointer",
            variant === "primary" && "border-[#6233E0] text-[#6233E0]",
            variant === "secondary" && "border-[#E0A449] text-[#E0A449]",
            variant === "tertiary" && "border-[#E03378] text-[#E03378]"
          )}
        >
          {t("generate_a_report")}
        </button>
      </div>
    </div>
  );
};
