import '../_shared/styles/globals.css';
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export const metadata = {
    title: "My App",
    description: "This is a single-page application built with Next.js",
};

export default async function RootLayout({children, params}) {
    const {locale} = await params?.locale || 'en';
    return (
        <html lang={locale}>
        <body className="bg-primary-darkest min-h-screen px-20 pt-2">
        <Header/>
        <main className="bg-primary-darkest">{children}</main>
        </body>
        </html>
    );
}
