import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Tiger the German Shepherd",
  description: "Welcome to Tiger's corner of the internet! A big fluffy German Shepherd who loves fetch, cuddles, and being the goodest boy ever.",
  openGraph: {
    title: "Tiger the German Shepherd",
    description: "Welcome to Tiger's corner of the internet! A big fluffy German Shepherd who loves fetch, cuddles, and being the goodest boy ever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="#"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen" style={{ fontFamily: "'Nunito', sans-serif" }}>
        <LocaleProvider>
          <LanguageToggle />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}