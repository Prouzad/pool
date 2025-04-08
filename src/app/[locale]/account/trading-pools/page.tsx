"use client";

import { TradingModal } from "@/components/modals/TradingModal";
import { useAccessToken } from "@/hooks/useAccessToken";
import { getAllPools } from "@/services/pools";
import { TradingCard } from "@/ui/Cards/TradingCard";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import React from "react";

export default function Account() {
  const lang = useLocale();
  const token = useAccessToken();

  const { data } = useQuery({
    queryKey: ["pools"],
    queryFn: () =>
      getAllPools({
        token,
        lang,
      }),
    enabled: !!token,
  });

  console.log(data);
  return (
    <div className="flex gap-[50px] flex-wrap max-w-[1400px]">
      {data &&
        data.map((item) => {
          return <TradingCard key={item.id} data={item} />;
        })}
      <TradingModal />
    </div>
  );
}
