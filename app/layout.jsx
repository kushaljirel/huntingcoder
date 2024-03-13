import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/nav.jsx";
import Footer from "@/app/components/footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hunting Coder",
  description: "A blog for Coders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <section className="min-h-screen">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
