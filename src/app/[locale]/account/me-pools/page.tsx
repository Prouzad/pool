"use client";

import { useAccessToken } from "@/hooks/useAccessToken";
import { getMePools } from "@/services/pools";
import { MePoolCard } from "@/ui/Cards/MePoolCard";

import { useQuery } from "@tanstack/react-query";

import { useLocale } from "next-intl";
import React from "react";

export default function Account() {
  const lang = useLocale();
  const token = useAccessToken();

  const { data } = useQuery({
    queryKey: ["pools"],
    queryFn: () =>
      getMePools({
        token,
        lang,
      }),
    enabled: !!token,
  });

  return (
    <div className="flex gap-[50px] flex-wrap max-w-[1400px]">
      {data &&
        data.map((item) => {
          return <MePoolCard key={item.id} data={item} />;
        })}
    </div>
  );
}
