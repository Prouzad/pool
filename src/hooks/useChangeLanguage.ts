import { usePathname, useRouter } from "@/i18n/routing";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export const useChangeLanguage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [selectedValue, setSelectedValue] = useState(params.locale);

  const handleChangeLanguage = (locale: string) => {
    setSelectedValue(locale);

    const newPath = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    router.replace(newPath, { locale });
  };

  return { selectedValue, handleChangeLanguage };
};
