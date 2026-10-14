import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import StructuredData from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const siteUrl = "https://diamondshineuae.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Diamond Shine Laundry Karama Dubai | Free Pickup & Delivery",
    template: "%s | Diamond Shine Laundry",
  },
  description:
    "Diamond Shine Laundry in Karama, Dubai. Wash and fold, dry cleaning, steam ironing, bed linen, curtains, hygienic care, and free pickup and delivery.",
  keywords: [
    "laundry in Karama",
    "laundry Dubai",
    "free pickup delivery laundry Dubai",
    "wash and fold Karama",
    "dry cleaning Karama",
    "steam ironing Dubai",
    "Diamond Shine Laundry",
  ],
  authors: [{ name: "Diamond Shine Laundry" }],
  creator: "Diamond Shine Laundry",
  publisher: "Diamond Shine Laundry",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: "Diamond Shine Laundry Karama Dubai | Free Pickup & Delivery",
    description: "Fresh, hygienic laundry care with free pickup and delivery in Karama, Dubai.",
    url: siteUrl,
    siteName: "Diamond Shine Laundry",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/diamond-shine-pickup-delivery.webp", width: 1997, height: 788, alt: "Diamond Shine Laundry free pickup and delivery service in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diamond Shine Laundry Karama Dubai",
    description: "Free pickup and delivery with trusted laundry care in Karama, Dubai.",
    images: ["/images/diamond-shine-pickup-delivery.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AE">
      <body className="min-h-screen bg-[#f5faff] text-[#102a4a] antialiased">
        <StructuredData />
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
