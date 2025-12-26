import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/context/query-provider";

import { FontProvider } from "@/context/font-provider";
import { DirectionProvider } from "@/context/direction-provider";
import ToastProvider from "@/context/toast-providers";
import { ThemeProvider } from "@/context/theme-provider";



export const metadata: Metadata = {
  title: {
    default: "Verifire",
    template: "Verifire - %s", // <-- template judul dinamis
  },
  description: "Aplikasi manajemen verifikasi data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <QueryProvider>
          <ThemeProvider>
            <FontProvider>
              <DirectionProvider >
                <ToastProvider />
                {children}
              </DirectionProvider>
            </FontProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
