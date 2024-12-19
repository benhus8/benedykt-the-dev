import './_shared/styles/globals.css';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
    title: "My App",
    description: "This is a single-page application built with Next.js",
};

export default function RootLayout({ children }) {

    return (
        <html lang="en">
        <body className="bg-primary-darkest ">
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
