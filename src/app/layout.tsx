import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Vox AI",
  description: "A new order experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-${inter.className} font-${anton.className}`}>
        {children}
      </body>
    </html>
  );
}
