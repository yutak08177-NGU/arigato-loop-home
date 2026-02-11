import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "eienloop株式会社 | 感謝でつながる経済をつくる",
  description:
    "eienloop株式会社は「感謝経済」という新しい経済システムの実現を目指すスタートアップです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${cormorantGaramond.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
