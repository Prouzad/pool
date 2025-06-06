import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/[locale]/globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ClientProviders } from "@/components/Providers/ClientProviders";

export const metadata: Metadata = {
  title: "Pool",
  description: "Trading pool",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientProviders>{children}</ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
