import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function AccountPage() {
  const lang = useLocale();
  redirect({
    href: "/account/trading-pools",
    locale: lang,
  });
  return null;
}
