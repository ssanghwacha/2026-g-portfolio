import type { Metadata } from "next";
import { Boldonse } from "next/font/google";
import "./globals.css";

const boldonse = Boldonse({ weight: "400", variable: "--font-boldonse", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sangwha Cha",
  description: "Portfolio of Sangwha Cha — Graphic Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${boldonse.variable}`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
