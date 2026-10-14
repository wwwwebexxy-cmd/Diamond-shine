import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diamond Shine Laundry | Clean Clothes, Brighter Days",
  description:
    "Diamond Shine Laundry in Karama, Dubai. Wash and fold, dry cleaning, steam ironing, bed linen, curtains, and fresh hygienic laundry care.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f5faff] text-[#102a4a] antialiased">
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
