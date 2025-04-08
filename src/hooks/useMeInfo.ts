import { useAccessToken } from "@/hooks/useAccessToken";
import { getUserInfo } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useMeInfo = () => {
  const token = useAccessToken();
  const lang = useLocale();
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      return await getUserInfo({
        token,
        lang,
      });
    },
    enabled: !!token,
  });
};
