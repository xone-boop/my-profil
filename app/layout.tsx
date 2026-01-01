import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portofolio | Fullstack Web Developer",
  description: "Jasa pembuatan website e-commerce dan landing page profesional untuk bisnis Anda.",
};

import Layout from "@/components/layout/Layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-white text-gray-900 font-sans antialiased",
          inter.variable
        )}
      >
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
