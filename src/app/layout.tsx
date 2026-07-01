import type { Metadata } from "next";
import { Jost, Lora, Fraunces } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  // no fixed weight array — keeps it variable so SOFT/WONK axes work
});

export const metadata: Metadata = {
  title: "Angie Zhang",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${lora.variable} ${fraunces.variable}`}
    >
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
