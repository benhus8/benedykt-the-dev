import "../_shared/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { NextIntlClientProvider } from "next-intl";

export const metadata = {
  title: "My App",
  description: "This is a single-page application built with Next.js",
};

export default async function RootLayout({ children, params }) {
  const locale = params?.locale || "en";

  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className="bg-primary-darkest min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          <main className="bg-primary-darkest pt-20 lg:pt-24">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
