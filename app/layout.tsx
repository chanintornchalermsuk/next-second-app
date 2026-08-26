import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({    
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "ชื่อเว็บ Web Name ....",
  description: "คำบรรยายเว็บ Web Description .....",
  keywords: ["คีย์เวิร์ด1", "คีย์เวิร์ด2", "คีย์เวิร์ด3"],
  authors: [{ 
    name: "ชื่อ/ทีมผู้พัฒนา", 
    url: "https://www.example.com" 
  }],    
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kanit.className}`}
    >
      <body className="min-h-full flex flex-col">
        <h1 className="text-center text-blue-800 font-bold">WELCOME TO SAU</h1>
        <hr />
        {children}
      </body>
    </html>
  );
}
