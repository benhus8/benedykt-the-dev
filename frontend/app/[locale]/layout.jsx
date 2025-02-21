import "../_shared/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "My App",
  description: "This is a single-page application built with Next.js",
};

export default async function RootLayout({ children, params }) {
  const { locale } = (await params?.locale) || "en";
  return (
    <html lang={locale}>
      <body className="bg-primary-darkest min-h-screen">
        <NavBar />
        <main className="bg-primary-darkest pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
