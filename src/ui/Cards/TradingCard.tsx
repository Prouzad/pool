import { NUMBER_TO_DIVIDE } from "@/lib/const";
import { AllPoolsResponse } from "@/services/pools/_types";
import { ModalNames, useModalStore } from "@/services/store/useModalStore";
import { formatNumber } from "@/utils";
import { cn } from "@/utils/twMerge";

export const TradingCard = ({ data }: { data: AllPoolsResponse }) => {
  const { setModal } = useModalStore();
  const getCardType = (id: number): "primary" | "secondary" | "tertiary" => {
    const types = ["primary", "secondary", "tertiary"] as const;
    return types[(id - 1) % 3];
  };

  const variant = data.id ? getCardType(data.id) : "primary";

  return (
    <div className="w-[293px] rounded-[30px] border border-[#E4E4E7] p-[26px] flex flex-col gap-[15px] bg-white">
      <p className="font-medium text-[20px]">Trading Pool №{data.id}</p>
      <div className="border-t border-[#E4E4E7] flex flex-col gap-1 pt-3.5">
        <div className="flex items-center justify-between">
          <p className="font-medium text-[14px]">Набор</p>
          <p className="font-light text-base">
            {formatNumber(data.expected_amount / NUMBER_TO_DIVIDE)} $
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[14px]">Набрано</p>
          <p className="font-light text-base">
            {formatNumber(data.current_amount / NUMBER_TO_DIVIDE)} $
          </p>
        </div>
      </div>
      <div
        className={cn(
          "w-[240px] rounded-[30px] flex flex-col justify-center items-center px-[5px] pb-[5px] bg-gradient-to-b ",
          variant === "primary" && "from-[#C8DBFD] to-[#FCFDFF] text-[#2D1277]",
          variant === "secondary" &&
            "from-[#FAE8CD] to-[#FFFBF7] text-[#6E614D]",
          variant === "tertiary" && "from-[#FD94BE] to-[#FFE2ED] text-[#9C1C4F]"
        )}
      >
        <p className="text-[20px] font-medium text-center mt-[28px]">Прибыль</p>
        <p className="text-center text-black text-[15px] font-medium">от</p>
        <p className="text-[40px] font-bold text-center ">
          {data.promised_percentage}%{" "}
          <span className="text-[15px] font-medium text-black">в месяц</span>
        </p>
        <button
          onClick={() => {
            setModal(ModalNames.TRADING_CREATE, data);
          }}
          className={cn(
            "rounded-[20px] w-full h-10 text-white mt-2",
            variant === "primary" && "bg-[#6233E0]",
            variant === "secondary" && "bg-[#E0A449]",
            variant === "tertiary" && "bg-[#E03378]"
          )}
        >
          Вложить
        </button>
      </div>
    </div>
  );
};
