import "../_shared/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { NextIntlClientProvider } from "next-intl";
import NotFoundPage from "@/app/[locale]/not-found";

export const metadata = {
  title: "Benedykt Huszcza",
  description:
    "Portfolio of a Software Engineer with a passion for backend, AI, and modern web technologies. Discover my projects and experience.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export function NotFound() {
  return <NotFoundPage />;
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    return NotFound();
  }

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
