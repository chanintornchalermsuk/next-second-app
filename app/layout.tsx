import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ชื่อเว็บ Web Name ....",
  description: "คำบรรยายเว็บ Web Description .....",
  keywords: "คีย์เวิร์ด1, คีย์เวิร์ด2, คีย์เวิร์ด3, .....",  
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <h1>WELCOME TO SAU</h1>
        <hr />
        {children}
      </body>
    </html>
  );
}
